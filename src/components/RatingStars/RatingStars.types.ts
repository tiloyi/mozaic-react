import { ChangeEvent } from 'react';

export const sizes = ['s', 'm', 'l', 'xl'] as const;
export const types = ['input', 'result'] as const;

export type TRatingStarsSize = typeof sizes[number];
export type TRatingStarsTypes = typeof types[number];

export interface IRatingStarsProps {
    className?: string;
    type?: TRatingStarsTypes;
    size?: TRatingStarsSize;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export interface IRatingStarLabelProps {
    value: string;
    text: string;
    name: string;
}

export interface IRatingStarInputProps {
    value: string;
    checked?: boolean;
    name: string;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
