import React from 'react';
import { Story } from '@storybook/react';
import Badge from './Badge';
import { BadgeTheme, IBadgeProps } from './Badge.types';

const Template: Story<IBadgeProps> = args => <Badge {...args}>Badge</Badge>;

export const Controls = Template.bind({});

Controls.args = {
    theme: BadgeTheme.Success
};

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    }
};
