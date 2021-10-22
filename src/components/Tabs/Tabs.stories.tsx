import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Tabs from './Tabs';
import { ITabsProps } from './Tabs.types';

import TabButton from './partials/TabButton';
import TabLink from './partials/TabLink';

const Template: Story<ITabsProps> = args => {
    return (
        <Tabs {...args}>
            <TabButton name="first">First</TabButton>
            <TabButton name="second">Second</TabButton>
            <TabButton name="third">Third</TabButton>
        </Tabs>
    );
};

export const TabsStory = Template.bind({});

TabsStory.args = {
    name: 'TabsStory',
    initialTab: 'first'
};

TabsStory.storyName = 'Button Tabs';

const LinkTemplate: Story<ITabsProps> = args => {
    return (
        <Tabs {...args}>
            <TabLink link={`/?path=/story/tabsstory--link-tabs-story#first`}>First</TabLink>
            <TabLink link={`/?path=/story/tabsstory--link-tabs-story#second`}>Second</TabLink>
            <TabLink link={`/?path=/story/tabsstory--link-tabs-story#third`}>Third</TabLink>
        </Tabs>
    );
};

export const LinkTabsStory = LinkTemplate.bind({});

LinkTabsStory.args = {
    name: 'LinkTabsStory',
    initialTab: 'first'
};

LinkTabsStory.storyName = 'Link Tabs';

export default {
    title: 'TabsStory',
    component: TabsStory,
    argTypes: {}
};
