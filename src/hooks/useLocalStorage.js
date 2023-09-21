import { useState } from 'react';

const useLocalStorage = () => {
    const [localStorageData, setLocalStorageData] = useState({});


    return {
        localStorageData, setLocalStorageData,
    };
};

export default useLocalStorage;