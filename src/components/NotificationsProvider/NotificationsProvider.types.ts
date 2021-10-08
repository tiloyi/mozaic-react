import { INotificationProps } from '../Notification/Notification.types';

export interface INotificationsItem extends INotificationProps {
    id?: string;
    title?: string;
    message?: string;
}

export interface INotificationsActionsContextProps {
    addNotification: (notification: INotificationsItem) => void;
    removeNotification: (notificationId: string) => void;
}

export interface INotificationsStateContextProps {
    notifications: Array<INotificationsItem>;
}

export interface INotificationsRendererProps {}
