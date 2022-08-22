import { HTMLAttributes } from 'react';

export const sizes = ['s', 'm'] as const;

export type TAccordionSize = typeof sizes[number];

export interface IAccordionContextProps {
    size: TAccordionSize;
    isOpen: boolean;
    isDisabled: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export interface IAccordionContextProviderProps {
    size: TAccordionSize;
    defaultIsOpen: boolean;
    isDisabled: boolean;
}

export interface IAccordionContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: TAccordionSize;
}

export interface IAccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface IAccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface IAccordionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface IAccordionProps extends IAccordionContainerProps {
    defaultIsOpen?: boolean;
    isDisabled?: boolean;
}
