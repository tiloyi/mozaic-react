export const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type THeadingTag = typeof tags[number];

export const sizes = ['s', 'm', 'l'] as const;

export type THeadingSize = typeof sizes[number];

export const textAligns = ['left', 'center', 'right'] as const;

export type THeadingTextAlign = typeof textAligns[number];

export const weights = ['light', 'regular', 'semi-bold'] as const;

export type THeadingWeight = typeof weights[number];

export enum HeadingUnderline {
    Primary01_200 = 'line-primary-01-200',
    Primary01_500 = 'line-primary-01-500',
    Primary02_200 = 'line-primary-02-200',
    Primary02_600 = 'line-primary-02-600'
}

export interface IHeadingProps {
    className?: string;
    as?: THeadingTag;
    size?: THeadingSize;
    textAlign?: THeadingTextAlign;
    weight?: THeadingWeight;
    underline?: HeadingUnderline;
}
