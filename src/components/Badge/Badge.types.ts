import { HTMLAttributes } from 'react';

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: BadgeTheme;
}

export enum BadgeTheme {
    Info = 'info',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Neutral = 'neutral'
}
