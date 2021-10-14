import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export enum TabType {
    'Link' = 'link',
    'Button' = 'Button'
}

export interface ITabsProps {
    name: string;
    type: TabType;
    tabs: ITabItem[];
    initialTab?: number;
    isShadowEnabled?: boolean;
    onChangeTab?: (tabIndex: number) => void;
}

export interface ITabLinkItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    link: string;
    isSelected: boolean;
}

export interface ITabButtonItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    isSelected: boolean;
}

export interface ITabItem {
    link?: string;
    content: string | ReactNode;
}
