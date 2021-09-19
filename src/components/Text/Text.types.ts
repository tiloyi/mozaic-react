import { Size } from '../../constants/Size';

export const tags = [
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

export enum TextAlign {
    Left = 'left',
    Center = 'center',
    Right = 'right'
}

export enum TextTheme {
    Primary01 = 'primary-01',
    Primary02 = 'primary-02',
    Darkest = 'darkest',
    Darker = 'darker',
    Dark = 'dark',
    Light = 'light',
    Lightest = 'lightest',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Success = 'success'
}

export const themes = [
    TextTheme.Primary01,
    TextTheme.Primary02,
    TextTheme.Darkest,
    TextTheme.Darker,
    TextTheme.Dark,
    TextTheme.Light,
    TextTheme.Lightest,
    TextTheme.Danger,
    TextTheme.Warning,
    TextTheme.Info,
    TextTheme.Success
];

export interface ITextProps {
    className?: string;
    as?: TTextTag;
    align?: TextAlign;
    theme?: TextTheme;
    size?: Size;
}
