import { useState } from 'react';

const useUnauthorizedModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function open() {
        setIsShowing(true);
    }

    function close() {
        setIsShowing(false);
    }

    return {
        isShowing,
        open,
        close,
    };
};

export default useUnauthorizedModal;
