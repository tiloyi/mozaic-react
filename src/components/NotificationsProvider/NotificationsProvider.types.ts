import { INotificationProps } from '../Notification/Notification.types';

export type TNotificationItemId = string;

export interface INotificationsItem extends INotificationProps {
    id?: TNotificationItemId;
}

export type TNotificationAddAction = (notification: INotificationsItem) => TNotificationItemId;

export type TNotificationRemoveAction = (notificationId: TNotificationItemId) => void;

export type TNotificationUpdateAction = (
    notificationId: TNotificationItemId,
    patch: Partial<INotificationsItem>
) => void;

export type TNotificationClearAction = () => void;

export interface INotificationsActions {
    add: TNotificationAddAction;
    remove: TNotificationRemoveAction;
    update: TNotificationUpdateAction;
    clear: TNotificationClearAction;
}

export interface INotificationsItems {
    notifications: Array<INotificationsItem>;
}

export interface INotificationsRendererProps {}
