import React from 'react';
import { Story } from '@storybook/react';
import Text from './Text';
import { ITextProps, TextSize, TextTheme, TextWeight } from './Text.types';

const Template: Story<ITextProps> = args => <Text {...args}>Lorem ipsum dolor sit amet</Text>;

export const Controls = Template.bind({});

Controls.args = {
    as: 'p',
    theme: TextTheme.Primary01,
    size: TextSize.M,
    weight: TextWeight.Regular
};

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    },
    size: {
        control: {
            type: 'select'
        }
    },
    align: {
        control: {
            type: 'select'
        }
    },
    weight: {
        control: {
            type: 'select',
            labels: {
                [TextWeight.Light]: 'Light',
                [TextWeight.Regular]: 'Regular',
                [TextWeight.SemiBold]: 'Semi Bold'
            }
        }
    }
};
