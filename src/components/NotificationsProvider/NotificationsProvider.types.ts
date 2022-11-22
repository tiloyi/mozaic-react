import { INotification } from '../Notification';

export type TNotificationItemId = string;

export const positions = ['top', 'bottom'] as const;

export type TNotificationPosition = typeof positions[number];

export interface INotificationsItem extends INotification {
    id: TNotificationItemId;
    duration: number;
    isClosable?: boolean;
    isAutoClosable?: boolean;
    position: TNotificationPosition;
}

export interface INotificationItemProps {
    id: TNotificationItemId;
    duration: number;
    isAutoClosable?: boolean;
}

export type TThemedNotificationParams = Omit<Partial<INotificationsItem>, 'theme'>;

export type TNotificationAddAction = (
    notification: Partial<INotificationsItem>,
    position?: TNotificationPosition
) => TNotificationItemId;

export type TThemedNotificationAction = (
    params: TThemedNotificationParams,
    position?: TNotificationPosition
) => TNotificationItemId;

export type TNotificationRemoveAction = (notificationId: TNotificationItemId) => void;

export type TNotificationUpdateAction = (
    notificationId: TNotificationItemId,
    patch: Partial<INotificationsItem>
) => void;

export type TNotificationClearAction = () => void;

export interface INotificationsActions {
    add: TNotificationAddAction;
    info: TThemedNotificationAction;
    success: TThemedNotificationAction;
    warning: TThemedNotificationAction;
    danger: TThemedNotificationAction;
    remove: TNotificationRemoveAction;
    update: TNotificationUpdateAction;
    clear: TNotificationClearAction;
}

export interface INotificationsItems {
    notifications: Array<INotificationsItem>;
}

export interface INotificationsRendererProps {
    position?: TNotificationPosition;
}
