import { HTMLAttributes } from 'react';
import { ILinkProps } from '../Link/Link.types';

export type TBreadcrumbsTheme = 'light' | 'dark';

export interface IBreadcrumbsItemProps extends Omit<ILinkProps, 'size' | 'theme'> {
    isCurrent?: boolean;
}

export interface IBreadcrumbsContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: TBreadcrumbsTheme;
}

export interface IBreadcrumbsProps extends IBreadcrumbsContainerProps {}
