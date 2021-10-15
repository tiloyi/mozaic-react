import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import { ITabsProps, TabType } from './Tabs.types';

import './Tabs.scss';
import TabLinkItem from './partials/TabLinkItem/TabLinkItem';
import TabButtonItem from './partials/TabButtonItem/TabButtonItem';

const Tabs: FC<ITabsProps> = ({ name, type, tabs, selectedTab, isShadowEnabled, onSelectTab }) => {
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
                                onClick={e => {
                                    onSelectTab?.(tabIndex, e);
                                }}
                            >
                                {tab.content}
                            </TabButtonItem>
                        );
                    } else if (type === TabType.Link) {
                        return (
                            <TabLinkItem
                                key={tabIndex}
                                isSelected={selectedTab === tabIndex || location === tab.link}
                                link={tab.link}
                                onClick={e => {
                                    onSelectTab?.(tabIndex, e);
                                }}
                            >
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
