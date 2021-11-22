import { ButtonHTMLAttributes, ReactElement } from 'react';

type TOmittedProps = 'disabled';

export const sizes = ['s', 'm', 'l'] as const;

export type TButtonSize = typeof sizes[number];

export const variants = ['solid', 'bordered'] as const;

export type TButtonVariant = typeof variants[number];

export const themes = ['primary', 'primary-02', 'danger', 'neutral'] as const;

export type TButtonTheme = typeof themes[number];

export const widths = ['fit', 'full'] as const;

export type TButtonWidth = typeof widths[number];

export interface IIconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, TOmittedProps> {
    className?: string;
    variant?: TButtonVariant;
    theme?: TButtonTheme;
    size?: TButtonSize;
    isDisabled?: boolean;
}

export interface IButtonContainerProps extends IIconButtonProps {
    width?: TButtonWidth;
}

export interface IButtonProps extends IButtonContainerProps {
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
}

export interface IButtonPartialProps {
    className?: string;
}
