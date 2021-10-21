import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

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

export interface INotification {
    theme?: NotificationTheme;
    size?: NotificationSize;
    title?: string;
    message?: ReactNode;
    footer?: ReactNode;
}

export interface INotificationPartialProps extends HTMLAttributes<HTMLDivElement> {
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

export interface INotificationProps extends INotification, HTMLAttributes<HTMLDivElement> {
    className?: string;
    isClosable?: boolean;
    onClose?: () => void;
}
