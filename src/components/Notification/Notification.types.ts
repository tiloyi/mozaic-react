export interface INotificationProps {
    className?: string;
    theme?: NotificationTheme;
    size?: NotificationSize;
}

export enum NotificationTheme {
    Info = 'info',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning'
}

export enum NotificationSize {
    L = 'l',
    M = 'm'
}
