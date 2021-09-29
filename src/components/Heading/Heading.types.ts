export const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type THeadingTag = typeof tags[number];

export enum HeadingSize {
    L = 'l',
    M = 'm',
    S = 's'
}

export enum HeadingAlign {
    Left = 'left',
    Center = 'center',
    Right = 'right'
}

export enum HeadingWeight {
    Light = 'light',
    Regular = 'regular',
    SemiBold = 'semi-bold'
}

export enum HeadingUnderline {
    Primary01_200 = 'line-primary-01-200',
    Primary01_500 = 'line-primary-01-500',
    Primary02_200 = 'line-primary-02-200',
    Primary02_600 = 'line-primary-02-600'
}

export interface IHeadingProps {
    className?: string;
    as?: THeadingTag;
    size?: HeadingSize;
    align?: HeadingAlign;
    weight?: HeadingWeight;
    underline?: HeadingUnderline;
}
