import React, { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const LocalStorageContext = createContext();

function LocalStorageProvider({ children }) {
    const { localStorageData, setLocalStorageData } = useLocalStorage();

    useEffect(() => {
        // Listen for the storage event to handle external changes
        const handleStorageChange = (e) => {
            const updatedLocalStorageData = { ...localStorageData, [e.key]: e.newValue };
            setLocalStorageData(updatedLocalStorageData);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorageData]);

    const setItem = (key, value) => {
        // Update localStorage and local state
        localStorage.setItem(key, value);
        setLocalStorageData({ ...localStorageData, [key]: value });
    };

    const removeItem = (key) => {
        // Remove from localStorage and local state
        localStorage.removeItem(key);
        const { [key]: deletedItem, ...updatedLocalStorageData } = localStorageData;
        setLocalStorageData(updatedLocalStorageData);
    };

    const getItemById = (id) => {
        return localStorageData[id];
    };

    const contextValue = {
        getItemById,
        setItem,
        removeItem
    };

    return (
        <LocalStorageContext.Provider value={contextValue}>
            {children}
        </LocalStorageContext.Provider>
    );
}


export { LocalStorageProvider };