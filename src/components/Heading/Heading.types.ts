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

export interface IHeadingProps {
    className?: string;
    as?: THeadingTag;
    size?: HeadingSize;
    align?: HeadingAlign;
    weight?: HeadingWeight;
}
