import React from 'react';
import { Story } from '@storybook/react';
import { ITabsListProps } from './Tabs.types';
import TabsLink from './partials/Link';
import TabsList from './TabsList';

export const LinksTemplate: Story<ITabsListProps> = args => (
    <TabsList {...args}>
        <TabsLink href="https://google.com" isSelected>
            Google
        </TabsLink>
        <TabsLink href="https://facebook.com">Facebook</TabsLink>
        <TabsLink href="https://apple.com" target="_blank">
            Apple
        </TabsLink>
        <TabsLink href="https://microsoft.com" isDisabled>
            Microsoft
        </TabsLink>
    </TabsList>
);

export const Links = LinksTemplate.bind({});

Links.args = {
    theme: 'primary-01',
    width: 'fit'
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
    }
};
