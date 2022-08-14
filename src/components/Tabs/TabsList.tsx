import React, { FC } from 'react';
import cn from 'classnames';
import { ITabsListProps, TTabsAlign, TTabsTheme, TTabsWidth } from './Tabs.types';
import './Tabs.scss';

export function getWidthModifier(width: TTabsWidth): string {
    if (width === 'full') {
        return 'mc-tabs--full';
    }

    return '';
}

export function getThemeModifier(theme: TTabsTheme): string {
    if (theme === 'primary-02') {
        return 'mc-tabs--primary-02';
    }

    return '';
}

export function getAlignModifier(align: TTabsAlign): string {
    if (align === 'center') {
        return 'mc-tabs--full-centered';
    }

    if (align === 'end') {
        return 'mc-tabs--full-end';
    }

    return '';
}

const TabsList: FC<ITabsListProps> = ({
    className,
    children,
    theme = 'primary-01',
    width = 'fit',
    align = 'start',
    ...props
}) => (
    <nav
        className={cn('mc-tabs', className, getThemeModifier(theme), getWidthModifier(width), getAlignModifier(align))}
    >
        <ul className="mc-tabs__nav" role="tablist" {...props}>
            {children}
        </ul>
    </nav>
);

export default TabsList;
