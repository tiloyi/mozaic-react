import { ChangeEvent, HTMLAttributes } from 'react';

export const sizes = ['s', 'm', 'l', 'xl'] as const;

export const types = ['input', 'result'] as const;

export const scores = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

export type TRatingStarsSize = typeof sizes[number];
export type TRatingStarsType = typeof types[number];
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

export interface IRatingStarsInputProps {}

export interface IRatingStarsProps {
    className?: string;
    type?: TRatingStarsType;
    size?: TRatingStarsSize;
    score?: TRatingStarsScore;
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
