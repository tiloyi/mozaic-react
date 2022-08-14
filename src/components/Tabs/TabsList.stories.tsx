import React from 'react';
import { Story } from '@storybook/react';
import { TabsButton } from './partials';
import { ITabsListProps } from './Tabs.types';
import TabsList from './TabsList';
import useTabsState from './useTabsState';

export const ListTemplate: Story<ITabsListProps> = args => {
    const { tab, select } = useTabsState('tab1');

    return (
        <TabsList {...args}>
            <TabsButton isSelected={tab === 'tab1'} onClick={() => select('tab1')}>
                Tab #1
            </TabsButton>
            <TabsButton isSelected={tab === 'tab2'} onClick={() => select('tab2')}>
                Tab #2
            </TabsButton>
            <TabsButton isSelected={tab === 'tab3'} onClick={() => select('tab3')}>
                Tab #3
            </TabsButton>
            <TabsButton isDisabled>Tab #4</TabsButton>
        </TabsList>
    );
};

export const List = ListTemplate.bind({});

List.args = {
    theme: 'primary-01',
    width: 'full',
    align: 'start'
};

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    },
    width: {
        control: {
            type: 'select'
        }
    },
    align: {
        control: {
            type: 'select'
        }
    }
};
