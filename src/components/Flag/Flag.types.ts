import { HTMLAttributes } from 'react';

export const variants = ['solid', 'bordered'] as const;

export type TFlagVariant = typeof variants[number];

export const themes = ['primary', 'primary-02', 'danger', 'dark', 'light'] as const;

export type TFlagTheme = typeof themes[number];

export interface IFlagProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: TFlagVariant;
    theme?: TFlagTheme;
}
