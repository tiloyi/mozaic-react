import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { IViewProps } from '../View';

export const themes = ['primary-01', 'primary-02'] as const;

export type TTabsTheme = typeof themes[number];

export const widths = ['fit', 'full'] as const;

export type TTabsWidth = typeof widths[number];

export const aligns = ['start', 'center', 'end'] as const;

export type TTabsAlign = typeof aligns[number];

export interface ITabsListProps extends HTMLAttributes<HTMLUListElement> {
    className?: string;
    theme?: TTabsTheme;
    width?: TTabsWidth;
    align?: TTabsAlign;
    hasShadow?: boolean;
}

export interface ITabsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    isDisabled?: boolean;
    isSelected?: boolean;
}

export interface ITabsButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    tab?: string;
    isDisabled?: boolean;
    isSelected?: boolean;
}

export interface ITabsPanelProps extends Omit<IViewProps, 'role' | 'hidden'> {
    tab: string;
}

export interface ITabsProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    name: string;
    initialTab?: string;
    isShadowEnabled?: boolean;
    isFullWidth?: boolean;
    isAlignedToContainer?: boolean;
    theme?: 'primary-01' | 'primary-02';
}

export interface ITabLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    link?: string;
}

export interface ITabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
}
