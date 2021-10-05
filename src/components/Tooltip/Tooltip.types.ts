export interface ITooltipProps {
    id?: string;
    placement: TooltipPlacement;
    text?: string;
    content?: JSX.Element;
}

export enum TooltipPlacement {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left'
}
