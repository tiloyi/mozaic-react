import React, { FC, createContext, useContext, useState, useEffect } from 'react';

interface ITabsContextProps {
    selectedTab: string;
    setSelectedTab: (tabName: string) => void;
}

const TabsContext = createContext<ITabsContextProps | undefined>(undefined);

export function useTabs(): ITabsContextProps {
    const context = useContext(TabsContext);

    if (context === undefined) {
        throw new Error('useTabs must be used within the TabsProvider');
    }

    return context;
}

interface ITabsProviderProps {
    initialTab?: string;
}

export const TabsProvider: FC<ITabsProviderProps> = ({ children, initialTab }) => {
    const [selectedTab, setSelectedTab] = useState<string>(initialTab || '');

    const contextValue: ITabsContextProps = {
        selectedTab,
        setSelectedTab
    };

    return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};
