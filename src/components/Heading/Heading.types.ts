export const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type THeadingTag = typeof tags[number];

export const sizes = ['s', 'm', 'l'] as const;

export type THeadingSize = typeof sizes[number];

export const textAligns = ['left', 'center', 'right'] as const;

export type THeadingTextAlign = typeof textAligns[number];

export const weights = ['light', 'regular', 'semi-bold'] as const;

export type THeadingWeight = typeof weights[number];

export const underlines = ['primary-01-200', 'primary-01-500', 'primary-02-200', 'primary-02-600'] as const;

export type THeadingUnderline = typeof underlines[number];

export interface IHeadingProps {
    className?: string;
    as?: THeadingTag;
    size?: THeadingSize;
    textAlign?: THeadingTextAlign;
    weight?: THeadingWeight;
    underline?: THeadingUnderline;
}
