import { HTMLAttributes, ReactElement } from 'react';
import { IViewProps } from '../View';

export const types = ['text', 'removable'] as const;

export const sizes = ['s', 'm'] as const;

export type TAccordionSize = typeof sizes[number];

export interface IAccordionContainer extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    size?: TAccordionSize;
    isOpen?: boolean;
}

export interface IAccordionTrigger extends IViewProps {
    className?: string;
}

export interface IAccordionContent extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    title: string;
    isDefaultOpen?: boolean;
    isDisabled?: boolean;
    size?: TAccordionSize;
    icon?: ReactElement;
}
