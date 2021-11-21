import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export const themes = ['info', 'success', 'danger', 'warning'] as const;

export type TNotificationTheme = typeof themes[number];

export const sizes = ['s', 'm'] as const;

export type TNotificationSize = typeof sizes[number];

export interface INotification {
    theme?: TNotificationTheme;
    size?: TNotificationSize;
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
    theme?: TNotificationTheme;
    size?: TNotificationSize;
    isClosable?: boolean;
}

export interface INotificationProps extends INotification, HTMLAttributes<HTMLDivElement> {
    className?: string;
    isClosable?: boolean;
    onClose?: () => void;
}
