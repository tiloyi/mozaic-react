import { HTMLAttributes } from 'react';

export const themes = ['info', 'success', 'danger', 'warning', 'neutral'] as const;

export type TBadgeTheme = typeof themes[number];

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: TBadgeTheme;
}
