import React from 'react';
import { Story } from '@storybook/react';
import Badge from './Badge';
import { BadgeTheme, IBadgeProps } from './Badge.types';

const Template: Story<IBadgeProps> = args => <Badge {...args}>Badge</Badge>;

export const BadgeStory = Template.bind({});

BadgeStory.args = {
    theme: BadgeTheme.Success
};

BadgeStory.storyName = 'Badge';

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {
        theme: {
            control: {
                type: 'select'
            }
        }
    }
};
