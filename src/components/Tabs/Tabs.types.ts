import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface ITabsProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    name: string;
    initialTab?: string;
    isShadowEnabled?: boolean;
    isFullWidth?: boolean;
}

export interface ITabLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    link?: string;
}

export interface ITabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
}
