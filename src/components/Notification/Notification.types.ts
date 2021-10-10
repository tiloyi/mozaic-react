import { ButtonHTMLAttributes, ReactNode } from 'react';

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

export interface INotificationCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export interface INotificationContainerProps extends INotificationPartialProps {
    theme?: NotificationTheme;
    size?: NotificationSize;
    isClosable?: boolean;
}

export interface INotificationProps extends INotificationContainerProps {
    title?: string;
    message?: ReactNode;
    footer?: ReactNode;
    onClose?: () => void;
}
