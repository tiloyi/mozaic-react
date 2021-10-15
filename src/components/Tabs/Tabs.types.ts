import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export enum TabType {
    'Link' = 'Link',
    'Button' = 'Button'
}

type TOnClickButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type TOnClickLinkEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

export type TOnClickTabButton = (e: TOnClickButtonEvent) => void;
export type TOnClickTabLink = (e: TOnClickLinkEvent) => void;

export interface ITabsProps {
    name: string;
    type: TabType;
    tabs: ITabItem[];
    selectedTab: number;
    isShadowEnabled?: boolean;
    isFullWidth?: boolean;
    onSelectTab?: (tabIndex: number, e?: TOnClickButtonEvent | TOnClickLinkEvent) => void;
}

export interface ITabLinkItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
    link?: string;
    isSelected: boolean;
    onClick?: TOnClickTabLink;
}

export interface ITabButtonItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: TOnClickTabButton;
    isSelected: boolean;
}

export interface ITabItem {
    link?: string;
    content: string | ReactNode;
}
