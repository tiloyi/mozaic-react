import { HTMLAttributes } from 'react';
import { ILinkProps } from '../Link';

export type TBreadcrumbsTheme = 'light' | 'dark';

export interface IBreadcrumbsItemProps extends Omit<ILinkProps, 'size' | 'theme'> {
    isCurrent?: boolean;
    isActive?: boolean;
}

export interface IBreadcrumbsContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: TBreadcrumbsTheme;
    isResponsive?: boolean;
}

export interface IBreadcrumbsProps extends IBreadcrumbsContainerProps {}
