import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import { ITabsProps, TabType } from './Tabs.types';

import './Tabs.scss';
import TabLinkItem from './partials/TabLinkItem/TabLinkItem';
import TabButtonItem from './partials/TabButtonItem/TabButtonItem';

const Tabs: FC<ITabsProps> = ({ name, type, tabs, initialTab, isShadowEnabled, onChangeTab }) => {
    const [selectedTab, setSelectedTab] = useState<number>(initialTab ?? 0);
    const [location] = useState<string>(window?.location?.href);

    return (
        <div className={cn('mc-tabs', isShadowEnabled && 'mc-tabs--no-shadow')}>
            <ul className="mc-tabs__nav" role="tablist" aria-label={name}>
                {tabs.map((tab, tabIndex) => {
                    if (type === TabType.Button) {
                        return (
                            <TabButtonItem
                                key={tabIndex}
                                isSelected={selectedTab === tabIndex}
                                onClick={() => {
                                    setSelectedTab(tabIndex);
                                    onChangeTab?.(tabIndex);
                                }}
                            ></TabButtonItem>
                        );
                    } else if (type === TabType.Link && tab.link) {
                        console.log(location);
                        console.log(tab.link);
                        return (
                            <TabLinkItem key={tabIndex} isSelected={location === tab.link} link={tab.link}>
                                {tab.content}
                            </TabLinkItem>
                        );
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    );
};

export default Tabs;
