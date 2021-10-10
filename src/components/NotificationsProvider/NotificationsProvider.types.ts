import { INotification } from '../Notification';

export type TNotificationItemId = string;

export interface INotificationsItem extends INotification {
    id: TNotificationItemId;
    duration: number;
}

export interface INotificationItemProps extends INotificationsItem {
    id: TNotificationItemId;
    duration: number;
    isClosable?: boolean;
    onClose?: () => void;
}

export type TNotificationAddAction = (notification: Partial<INotificationsItem>) => TNotificationItemId;

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
