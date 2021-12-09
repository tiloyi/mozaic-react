import React, { FC } from 'react';
import cn from 'classnames';
import { Link } from '../../Link';
import { IBreadcrumbsItemProps } from '../Breadcrumbs.types';
import { useBreadcrumbs } from '../BreadcrumbsContext';

const BreadcrumbsItem: FC<IBreadcrumbsItemProps> = ({ className, children, isCurrent, isActive, ...props }) => {
    const { theme } = useBreadcrumbs();

    return (
        <li className={cn('mc-breadcrumb__item', isActive && 'is-active', className)}>
            {isCurrent ? (
                <span className="mc-link mc-breadcrumb__current" aria-current="page">
                    {children}
                </span>
            ) : (
                <Link {...props} theme={theme === 'dark' ? 'light' : undefined}>
                    {children}
                </Link>
            )}
        </li>
    );
};

export default BreadcrumbsItem;
