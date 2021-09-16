import { ButtonHTMLAttributes, ReactElement } from 'react';

type TOmittedProps = 'disabled';

export interface IIconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, TOmittedProps> {
    className?: string;
    variant?: ButtonVariant;
    theme?: ButtonTheme;
    size?: ButtonSize;
    isDisabled?: boolean;
}

export interface IButtonContainerProps extends IIconButtonProps {
    width?: ButtonWidth;
}

export interface IButtonProps extends IButtonContainerProps {
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
}

export interface IButtonPartialProps {
    className?: string;
}

export enum ButtonVariant {
    Solid = 'solid',
    Bordered = 'bordered'
}

export enum ButtonTheme {
    Primary = 'primary',
    Primary02 = 'primary-02',
    Danger = 'danger',
    Neutral = 'neutral'
}

export enum ButtonSize {
    S = 's',
    M = 'm',
    L = 'l'
}

export enum ButtonWidth {
    Fit = 'fit',
    Full = 'full'
}
