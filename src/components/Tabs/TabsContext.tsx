import React, { FC, createContext, useContext } from 'react';
import useTabsState from './useTabsState';

interface ITabsContextProps {
    tab: string;
    select: (tab: string) => void;
}

const TabsContext = createContext<ITabsContextProps | undefined>(undefined);

export const useTabsContext = (): ITabsContextProps | undefined => useContext(TabsContext);

interface ITabsContextProviderProps {
    defaultTab: string;
}

export const TabsContextProvider: FC<ITabsContextProviderProps> = ({ children, defaultTab }) => {
    const contextValue = useTabsState(defaultTab);

    return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};
