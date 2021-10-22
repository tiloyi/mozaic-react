import React, { FC } from 'react';
import cn from 'classnames';
import { ITabsProps } from './Tabs.types';
import { TabsProvider } from './TabsContext';

import './Tabs.scss';

const Tabs: FC<ITabsProps> = ({ children, className, name, initialTab, isShadowEnabled, isFullWidth }) => {
    return (
        <TabsProvider initialTab={initialTab}>
            <div
                className={cn(
                    'mc-tabs',
                    isShadowEnabled === false && 'mc-tabs--no-shadow',
                    isFullWidth && 'mc-tabs--full-centered',
                    className
                )}
            >
                <ul className="mc-tabs__nav" role="tablist" aria-label={name}>
                    {children}
                </ul>
            </div>
        </TabsProvider>
    );
};

export default Tabs;
