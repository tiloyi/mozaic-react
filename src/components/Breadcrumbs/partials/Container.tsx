import React, { FC } from 'react';
import cn from 'classnames';
import BreadcrumbsContextProvider from '../BreadcrumbsContext';
import { IBreadcrumbsContainerProps } from '../Breadcrumbs.types';

const BreadcrumbsContainer: FC<IBreadcrumbsContainerProps> = ({ className, children, theme, ...props }) => (
    <BreadcrumbsContextProvider theme={theme}>
        <nav className={cn('mc-breadcrumb', theme === 'dark' && 'mc-breadcrumb--dark', className)} {...props}>
            <ul className="mc-breadcrumb__container">{children}</ul>
        </nav>
    </BreadcrumbsContextProvider>
);

export default BreadcrumbsContainer;
