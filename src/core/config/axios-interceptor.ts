import axios from 'axios';

import { StorageService } from '../../shared/services/storage.service';
import { AllAppConfig } from './all-config';
import { checkMobileDesktopBrowser } from '../../shared/utils/utils-functions';
const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = process.env.REACT_APP_API_END_POINT;
let checkOneCall = true;

function refreshToken() {
    const config: any = {
        url: '/api/user/public/refreshtoken',
        method: 'POST',
        data: {
            refreshToken: StorageService.local.get(AllAppConfig.NAME_REFRESH_TOKEN_CURRENT_USER),
        },
    };
    return axios.request(config);
}

const setupAxiosInterceptors = (onUnauthenticated: () => void) => {
    const onRequestSuccess = (config: any) => {
        const token = StorageService.local.get(AllAppConfig.NAME_TOKEN_CURRENT_USER) || StorageService.session.get(AllAppConfig.NAME_TOKEN_CURRENT_USER);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers.sourceConnectedDevice = checkMobileDesktopBrowser();
        config.headers.langKey = StorageService.local.get(AllAppConfig.LOCALE);

        return config;
    };
    const onRequestError = (error: any) => {
        return Promise.reject(error);
    };

    const onResponseSuccess = (response: any) => {
        return response;
    };
    const onResponseError = (err: any) => {
        const status = err.status || (err.response ? err.response.status : 0);
        if (status === 401) {
            if (checkOneCall) {
                checkOneCall = false;
                refreshToken().then(
                    (resultRefreshToken) => {
                        if (resultRefreshToken) {
                            StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, resultRefreshToken?.data?.token);
                            checkOneCall = true;
                            return Promise.resolve(resultRefreshToken);
                        } else {
                            onUnauthenticated();
                            return Promise.reject(resultRefreshToken);
                        }
                    },
                    (errorRefreshToken) => {
                        // console.log('errorRefreshToken ', errorRefreshToken)
                        onUnauthenticated();
                        return Promise.reject(errorRefreshToken);
                    }
                );
            } else {
                return Promise.reject(err);
            }
        }

        if (status === 403) {
            onUnauthenticated();
            return Promise.reject(err);
        }

        return Promise.reject(err);
    };
    axios.interceptors.request.use(onRequestSuccess, onRequestError);
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
