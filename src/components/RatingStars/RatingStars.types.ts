import { ChangeEvent } from 'react';

export const sizes = ['s', 'm', 'l', 'xl'] as const;
export const types = ['input', 'result'] as const;
export const scores = [0,10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

export type TRatingStarsSize = typeof sizes[number];
export type TRatingStarsTypes = typeof types[number];
export type TRatingStarsScores = typeof scores[number];

export interface IRatingStarsProps {
    className?: string;
    type?: TRatingStarsTypes;
    size?: TRatingStarsSize;
    score?: TRatingStarsScores;
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
