import React from 'react';
import { Story } from '@storybook/react';
import Text from '../Text';
import { TabsButton, TabsPanel } from './partials';
import { TabsContextProvider as Tabs } from './TabsContext';
import TabsList from './TabsList';

export const PanelsTemplate: Story = () => (
    <Tabs defaultTab="tab1">
        <TabsList>
            <TabsButton tab="tab1">Tab #1</TabsButton>
            <TabsButton tab="tab2">Tab #2</TabsButton>
            <TabsButton tab="tab3">Tab #3</TabsButton>
            <TabsButton isDisabled>Tab #4</TabsButton>
        </TabsList>
        <TabsPanel tab="tab1">
            <Text>Panel #1</Text>
        </TabsPanel>
        <TabsPanel tab="tab2">
            <Text>Panel #2</Text>
        </TabsPanel>
        <TabsPanel tab="tab3">
            <Text>Panel #3</Text>
        </TabsPanel>
    </Tabs>
);

export const Panels = PanelsTemplate.bind({});
