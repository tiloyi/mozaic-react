import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    theme?: ButtonTheme;
    size?: ButtonSize;
    width?: ButtonWidth;
}

export interface IIconButtonProps {}

export interface IButtonLabelProps {}

export interface IButtonIconProps {}

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
