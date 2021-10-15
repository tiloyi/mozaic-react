import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Tabs from './Tabs';
import { ITabsProps, TabType } from './Tabs.types';

const Template: Story<ITabsProps> = args => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <Tabs
            {...args}
            selectedTab={selectedTab}
            onSelectTab={tabIndex => {
                setSelectedTab(tabIndex);
            }}
        />
    );
};
const LinkTemplate: Story<ITabsProps> = args => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <Tabs
            {...args}
            selectedTab={selectedTab}
            onSelectTab={(tabIndex, e) => {
                e.preventDefault();
                setSelectedTab(tabIndex);
            }}
        />
    );
};

export const TabsStory = Template.bind({});

TabsStory.args = {
    type: TabType.Button,
    name: 'TabsStory',
    tabs: [
        {
            content: 'First tab'
        },
        {
            content: 'Second tab'
        },
        {
            content: 'Third tab'
        }
    ]
};

TabsStory.storyName = 'Button Tabs';

export const LinkTabsStory = LinkTemplate.bind({});

LinkTabsStory.args = {
    type: TabType.Link,
    name: 'TabsStory',
    tabs: [
        {
            link: '',
            content: 'First tab'
        },
        {
            link: '',
            content: 'Second tab'
        },
        {
            link: '',
            content: 'Third tab'
        }
    ]
};

LinkTabsStory.storyName = 'Link Tabs';

export const TabsFullWidthStory = Template.bind({});

TabsFullWidthStory.args = {
    type: TabType.Button,
    name: 'TabsStory',
    isFullWidth: true,
    tabs: [
        {
            content: 'First tab'
        },
        {
            content: 'Second tab'
        },
        {
            content: 'Third tab'
        }
    ]
};

TabsFullWidthStory.storyName = 'Full Width Tabs';

export const TabsWithNoShadowStory = Template.bind({});

TabsWithNoShadowStory.args = {
    type: TabType.Button,
    name: 'TabsStory',
    isShadowEnabled: false,
    tabs: [
        {
            content: 'First tab'
        },
        {
            content: 'Second tab'
        },
        {
            content: 'Third tab'
        }
    ]
};

TabsWithNoShadowStory.storyName = 'No Shadow Tabs';

export default {
    title: 'TabsStory',
    component: TabsStory,
    argTypes: {}
};
