import React, { FC } from 'react';
import cn from 'classnames';
import { ITabLinkProps } from '../../Tabs.types';
import { useTabsContext } from '../../TabsContext';

import TabItem from '../TabItem';

const TabLink: FC<ITabLinkProps> = ({ children, link, onClick, ...restProps }) => {
    const { selectedTab, setSelectedTab } = useTabsContext();

    return (
        <TabItem>
            <a
                {...restProps}
                onClick={event => {
                    if (link) {
                        setSelectedTab(link);
                    }
                    if (onClick) {
                        onClick(event);
                    }
                }}
                href={link}
                role="tab"
                aria-selected={link === selectedTab}
                className={cn('mc-tabs__link', link === selectedTab && 'mc-tabs__link--selected')}
            >
                {children}
            </a>
        </TabItem>
    );
};

export default TabLink;
