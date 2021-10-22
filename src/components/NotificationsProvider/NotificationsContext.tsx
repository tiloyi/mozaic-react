import React, { FC, createContext, useContext } from 'react';
import { INotificationsActions, INotificationsItems } from './NotificationsProvider.types';
import useNotificationsState from './useNotificationsState';

const NotificationsActionsContext = createContext<INotificationsActions>({} as INotificationsActions);

const NotificationsStateContext = createContext<INotificationsItems>({} as INotificationsItems);

export function useNotifications(): INotificationsActions {
    const context = useContext(NotificationsActionsContext);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (context === undefined) {
        throw new Error('useNotificationsState must be used within the NotificationsProvider');
    }

    return context;
}

export function useNotificationsItems(): INotificationsItems {
    const context = useContext(NotificationsStateContext);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (context === undefined) {
        throw new Error('useNotificationsItems must be used within the NotificationsProvider');
    }

    return context;
}

export const NotificationsProvider: FC = ({ children }) => {
    const [notifications, actions] = useNotificationsState();

    const stateContextValue = {
        notifications
    };

    return (
        <NotificationsStateContext.Provider value={stateContextValue}>
            <NotificationsActionsContext.Provider value={actions}>{children}</NotificationsActionsContext.Provider>
        </NotificationsStateContext.Provider>
    );
};
