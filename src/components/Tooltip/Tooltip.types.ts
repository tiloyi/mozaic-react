import { HTMLAttributes } from 'react';

export interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    id?: string;
    placement: TooltipPlacement;
    label?: string | JSX.Element;
}

export enum TooltipPlacement {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left'
}
