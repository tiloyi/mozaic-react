import { HTMLAttributes } from 'react';

export const themes = ['default', 'branded'] as const;

export type TProgressBarTheme = typeof themes[number];

export const sizes = ['xs', 's', 'm'] as const;

export type TProgressBarSize = typeof sizes[number];

export interface IProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    value: number;
    theme?: TProgressBarTheme;
    size?: TProgressBarSize;
    renderValue?: (value: number) => string;
    withValue?: boolean;
}
