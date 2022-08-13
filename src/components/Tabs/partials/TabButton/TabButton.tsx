import React, { FC } from 'react';
import cn from 'classnames';
import { ITabButtonProps } from '../../Tabs.types';
import { useTabsContext } from '../../TabsContext';

import TabItem from '../TabItem';

const TabButton: FC<ITabButtonProps> = ({ children, name, onClick, ...restProps }) => {
    const { selectedTab, setSelectedTab } = useTabsContext();

    return (
        <TabItem>
            <button
                {...restProps}
                onClick={event => {
                    setSelectedTab(name);
                    if (onClick) {
                        onClick(event);
                    }
                }}
                type="button"
                role="tab"
                aria-selected={name === selectedTab}
                className={cn('mc-tabs__link', name === selectedTab && 'mc-tabs__link--selected')}
            >
                {children}
            </button>
        </TabItem>
    );
};

export default TabButton;
