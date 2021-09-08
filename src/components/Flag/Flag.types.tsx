import { HTMLAttributes } from 'react';

export interface IFlagProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: FlagVariant;
    theme?: FlagTheme;
}

export enum FlagVariant {
    Solid = 'solid',
    Bordered = 'bordered'
}

export enum FlagTheme {
    Primary = 'primary',
    Primary02 = 'primary-02',
    Danger = 'danger',
    Dark = 'dark',
    Light = 'light'
}
