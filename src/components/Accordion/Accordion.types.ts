export const types = ['text', 'removable'] as const;
export const sizes = ['s', 'm'] as const;

export type TAccordionSize = typeof sizes[number];

export interface IAccordionProps {
    className?: string;
    title: string;
    isDefaultOpen?: boolean;
    isDisabled?: boolean;
    size?: TAccordionSize;
    icon? : React.ReactElement;
}
