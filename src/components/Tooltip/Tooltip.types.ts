export interface ITooltipProps {
    id?: string;
    placement: TTooltipPlacement;
    text: string;
}

export type TTooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export enum TooltipPlacement {
    top = 'tooltipTop',
    right = 'tooltipRight',
    bottom = 'tooltipBottom',
    left = 'tooltipLeft'
}
