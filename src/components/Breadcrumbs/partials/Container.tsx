import React, { FC, useMemo } from 'react';
import cn from 'classnames';
import BreadcrumbsContextProvider from '../BreadcrumbsContext';
import { IBreadcrumbsContainerProps, TBreadcrumbsTheme } from '../Breadcrumbs.types';

export function getThemeModifier(theme?: TBreadcrumbsTheme): string {
    if (theme === 'dark') {
        return 'mc-breadcrumb--dark';
    }

    return '';
}

export function getResponsiveModifier(isResponsive?: boolean): string {
    if (isResponsive) {
        return 'mc-breadcrumb--responsive';
    }

    return '';
}

const BreadcrumbsContainer: FC<IBreadcrumbsContainerProps> = ({
    className,
    children,
    theme,
    isResponsive,
    ...props
}) => {
    const blockClassName = useMemo(
        () => cn('mc-breadcrumb', getThemeModifier(theme), getResponsiveModifier(isResponsive), className),
        [theme, isResponsive, className]
    );

    return (
        <BreadcrumbsContextProvider theme={theme}>
            <nav className={blockClassName} {...props}>
                <ul className="mc-breadcrumb__container">{children}</ul>
            </nav>
        </BreadcrumbsContextProvider>
    );
};

export default BreadcrumbsContainer;
