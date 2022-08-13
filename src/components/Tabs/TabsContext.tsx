import React, { FC, createContext, useContext, useState } from 'react';

interface ITabsContextProps {
    selectedTab: string;
    setSelectedTab: (tabName: string) => void;
}

const TabsContext = createContext<ITabsContextProps | undefined>(undefined);

export function useTabsContext(): ITabsContextProps {
    const context = useContext(TabsContext);

    if (context === undefined) {
        throw new Error('useTabsContext must be used within the TabsContextProvider');
    }

    return context;
}

interface ITabsContextProviderProps {
    initialTab?: string;
}

export const TabsContextProvider: FC<ITabsContextProviderProps> = ({ children, initialTab }) => {
    const [selectedTab, setSelectedTab] = useState<string>(initialTab ?? '');

    const contextValue: ITabsContextProps = {
        selectedTab,
        setSelectedTab
    };

    return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};
