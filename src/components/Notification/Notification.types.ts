export interface INotificationPartialProps {
    className?: string;
}

export interface INotificationContainerProps extends INotificationPartialProps {
    theme?: NotificationTheme;
    size?: NotificationSize;
}

export interface INotificationProps extends INotificationContainerProps {}

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
