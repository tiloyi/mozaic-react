import React, { FC, createContext, useContext } from 'react';
import {
    IAddNotificationParams,
    INotificationsActionsContextProps,
    INotificationsStateContextProps
} from './Notification.types';

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
    const actionsContextValue = {
        addNotification(params: IAddNotificationParams) {
            console.log('add notification: ', params);
        },
        removeNotification() {
            console.log('remove notification');
        }
    };

    const stateContextValue = {
        notifications: []
    };

    return (
        <NotificationsStateContext.Provider value={stateContextValue}>
            <NotificationsActionsContext.Provider value={actionsContextValue}>
                {children}
            </NotificationsActionsContext.Provider>
        </NotificationsStateContext.Provider>
    );
};
