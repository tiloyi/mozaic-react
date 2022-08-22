import { ChangeEvent, HTMLAttributes } from 'react';

export const sizes = ['s', 'm', 'l', 'xl'] as const;

export type TRatingStarsSize = typeof sizes[number];

export const types = ['input', 'result'] as const;

export type TRatingStarsType = typeof types[number];

export const scores = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

export type TRatingStarsScore = typeof scores[number];

export interface IRatingStarsContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    type: TRatingStarsType;
    size: TRatingStarsSize;
}

export interface IRatingStarsResultProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    score?: TRatingStarsScore;
    size?: TRatingStarsSize;
}

export interface IRatingStarsInputProps extends Omit<IRatingStarsResultProps, 'onChange'> {
    name?: string;
    onChange?: (score: TRatingStarsScore) => void;
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
