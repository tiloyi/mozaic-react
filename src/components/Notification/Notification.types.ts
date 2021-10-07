export enum NotificationTheme {
    Info = 'info',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning'
}

export enum NotificationSize {
    M = 'm',
    S = 's'
}

export interface INotificationPartialProps {
    className?: string;
}

export interface INotificationContainerProps extends INotificationPartialProps {
    theme?: NotificationTheme;
    size?: NotificationSize;
}

export interface INotificationProps extends INotificationContainerProps {}

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
