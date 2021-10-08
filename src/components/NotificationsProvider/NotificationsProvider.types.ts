import { NotificationTheme } from '../Notification';

export interface INotificationsItem {}

export interface IAddNotificationParams {
    theme: NotificationTheme;
}

export interface INotificationsActionsContextProps {
    addNotification: (params: IAddNotificationParams) => void;
    removeNotification: () => void;
}

export interface INotificationsStateContextProps {
    notifications: Array<unknown>;
}

export interface INotificationsRendererProps {}
