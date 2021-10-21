import { HTMLAttributes } from 'react';

export interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    id?: string;
    placement: TooltipPlacement;
    label?: string | JSX.Element;
}

export enum TooltipPlacement {
    Top = 'top',
    Right = 'right',
    Bottom = 'bottom',
    Left = 'left'
}
