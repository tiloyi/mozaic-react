import React, { FC } from 'react';
import cn from 'classnames';
import { ITabsListProps, TTabsTheme, TTabsWidth } from './Tabs.types';
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

const TabsList: FC<ITabsListProps> = ({ className, children, theme = 'primary-01', width = 'fit', ...props }) => {
    return (
        <nav className={cn('mc-tabs', className, getThemeModifier(theme), getWidthModifier(width))}>
            <ul className="mc-tabs__nav" role="tablist" {...props}>
                {children}
            </ul>
        </nav>
    );
};

export default TabsList;
