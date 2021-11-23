export const tags = [
    'div',
    'p',
    'span',
    'em',
    'i',
    'strong',
    'u',
    'abbr',
    'cite',
    'del',
    'ins',
    'kbd',
    'mark',
    's',
    'samp',
    'sub',
    'sup'
] as const;

export type TTextTag = typeof tags[number];

export const textAligns = ['left', 'center', 'right'] as const;

export type TTextAlign = typeof textAligns[number];

export const themes = [
    'primary-01',
    'primary-02',
    'darkest',
    'darker',
    'dark',
    'light',
    'lightest',
    'danger',
    'warning',
    'info',
    'success'
] as const;

export type TTextTheme = typeof themes[number];

export const sizes = ['s', 'm', 'l'] as const;

export type TTextSize = typeof sizes[number];

export const weights = ['light', 'regular', 'semi-bold'] as const;

export type TTextWeight = typeof weights[number];

export interface ITextProps {
    className?: string;
    as?: TTextTag;
    textAlign?: TTextAlign;
    theme?: TTextTheme;
    size?: TTextSize;
    weight?: TTextWeight;
}
