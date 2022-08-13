import React, { FC } from 'react';
import { ITabsListProps } from '../Tabs.types';

const TabsList: FC<ITabsListProps> = ({ children, ...props }) => {
    return (
        <nav className="mc-tabs">
            <ul className="mc-tabs__nav" role="tablist" {...props}>
                {children}
            </ul>
        </nav>
    );
};

export default TabsList;
