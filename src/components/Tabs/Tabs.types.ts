import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from 'react';

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
