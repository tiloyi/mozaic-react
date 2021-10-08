import React, { FC, createContext, useContext, useState } from 'react';
import {
    INotificationsActionsContextProps,
    INotificationsItem,
    INotificationsStateContextProps
} from './NotificationsProvider.types';

const NotificationsActionsContext = createContext<INotificationsActionsContextProps>(
    {} as INotificationsActionsContextProps
);

const NotificationsStateContext = createContext<INotificationsStateContextProps>({} as INotificationsStateContextProps);

export function useNotifications(): INotificationsActionsContextProps {
    const context = useContext(NotificationsActionsContext);

    if (context === undefined) {
        throw new Error('useNotifications must be used within the NotificationsProvider');
    }

    return context;
}

export function useNotificationsState(): INotificationsStateContextProps {
    const context = useContext(NotificationsStateContext);

    if (context === undefined) {
        throw new Error('useNotificationsState must be used within the NotificationsProvider');
    }

    return context;
}

export const NotificationsProvider: FC = ({ children }) => {
    const [notifications, setNotifications] = useState<Array<INotificationsItem>>([]);

    const actionsContextValue = {
        addNotification(notification: INotificationsItem) {
            console.log('add notification: ', notification);
            setNotifications(prevNotifications => [...prevNotifications, notification]);
        },
        removeNotification(notificationId: string) {
            console.log('remove notification', notificationId);
        }
    };

    const stateContextValue = {
        notifications
    };

    return (
        <NotificationsStateContext.Provider value={stateContextValue}>
            <NotificationsActionsContext.Provider value={actionsContextValue}>
                {children}
            </NotificationsActionsContext.Provider>
        </NotificationsStateContext.Provider>
    );
};
