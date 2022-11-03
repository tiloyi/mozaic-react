import React, { FC } from 'react';
import { View } from '../../View';
import { ITabsPanelProps } from '../Tabs.types';
import { useTabsContext } from '../TabsContext';

const TabsPanel: FC<ITabsPanelProps> = ({ children, tab, ...props }) => {
    const tabsContext = useTabsContext();

    const isHidden = tab !== tabsContext?.tab;

    return (
        <View role="tabpanel" hidden={isHidden} aria-hidden={isHidden} {...props}>
            {children}
        </View>
    );
};

export default TabsPanel;
