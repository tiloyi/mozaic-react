import { IViewProps } from '../View';

export const sizes = ['s', 'l', 'm'] as const;

export type TLoaderSize = typeof sizes[number];

export const themes = ['light', 'dark', 'primary'] as const;

export type TLoaderTheme = typeof themes[number];

export interface ILoaderSvgProperties {
    radius: string;
    viewBox: string;
}

export interface ILoaderProps extends Omit<IViewProps, 'shadow' | 'radius' | 'role'> {
    size?: TLoaderSize;
    theme?: TLoaderTheme;
}
