import { HTMLAttributes } from 'react';

export const placements = ['top', 'right', 'left', 'bottom'] as const;

export type TTooltipPlacement = typeof placements[number];

export interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    id?: string;
    placement?: TTooltipPlacement;
    label?: string | JSX.Element;
}
