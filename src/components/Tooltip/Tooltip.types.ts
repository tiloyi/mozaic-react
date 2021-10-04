export interface ITooltipProps {
    appearance: TTooltipAppearance;
    text: string;
}

export type TTooltipAppearance = 'top' | 'right' | 'bottom' | 'left';

export enum TooltipAppearance {
    top = 'tooltipTop',
    right = 'tooltipRight',
    bottom = 'tooltipBottom',
    left = 'tooltipLeft'
}
