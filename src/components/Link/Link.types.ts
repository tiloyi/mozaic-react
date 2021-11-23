import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export const sizes = ['s', 'm'] as const;

export type TLinkSize = typeof sizes[number];

export const themes = ['primary', 'primary-02', 'danger', 'light'] as const;

export type TLinkTheme = typeof themes[number];

export interface ILinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    className?: string;
    size?: TLinkSize;
    theme?: TLinkTheme;
}
