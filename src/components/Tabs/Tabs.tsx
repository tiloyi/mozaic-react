import React, { FC } from 'react';
import cn from 'classnames';
import { ITabsProps } from './Tabs.types';
import { TabsContextProvider } from './TabsContext';

import './Tabs.scss';

const Tabs: FC<ITabsProps> = ({
    children,
    theme = 'primary-01',
    isAlignedToContainer,
    className,
    name,
    initialTab,
    isShadowEnabled,
    isFullWidth
}) => (
    <TabsContextProvider initialTab={initialTab}>
        <div
            data-testid="mozaic-react_tabs-container"
            className={cn(
                'mc-tabs',
                isShadowEnabled === false && 'mc-tabs--no-shadow',
                isFullWidth && 'mc-tabs--full-centered',
                isAlignedToContainer && 'mc-tabs--full',
                theme === 'primary-02' && 'mc-tabs--primary-02',
                className
            )}
        >
            <ul className="mc-tabs__nav" role="tablist" aria-label={name}>
                {children}
            </ul>
        </div>
    </TabsContextProvider>
);

export default Tabs;
