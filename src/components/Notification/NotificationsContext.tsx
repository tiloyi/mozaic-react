import React, { FC, createContext, useContext } from 'react';

interface INotificationContextProps {}

const NotificationsContext = createContext<INotificationContextProps>({} as INotificationContextProps);

export function useNotifications(): INotificationContextProps {
    const context = useContext(NotificationsContext);

    if (context === undefined) {
        throw new Error('useNotifications must be used within the NotificationsProvider');
    }

    return context;
}

export const NotificationsProvider: FC = ({ children }) => {
    const contextValue = {};

    return <NotificationsContext.Provider value={contextValue}>{children}</NotificationsContext.Provider>;
};
