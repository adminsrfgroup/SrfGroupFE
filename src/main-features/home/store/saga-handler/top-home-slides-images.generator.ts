import { invokeWS, MethodHttp } from '../../../../core/config/api-service';
import { put } from 'redux-saga/effects';
import { fetchTopHomeSlidesImagesSuccess, fetchTopHomeSlidesImagesFailure } from '../../../home/store/slice';

const apiUrl = 'api/top-home-slides-images';

export function* fetchTopHomeSlidesImagesHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public/slides`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        });
        yield put(fetchTopHomeSlidesImagesSuccess(result?.data));
    } catch (e) {
        yield put(fetchTopHomeSlidesImagesFailure(e));
    }
}
