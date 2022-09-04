import React from 'react';
import { Story } from '@storybook/react';
import Text from './Text';
import { ITextProps } from './Text.types';

const Template: Story<ITextProps> = args => <Text {...args}>Lorem ipsum dolor sit amet</Text>;

export const Controls = Template.bind({});

Controls.args = {
    as: 'p',
    theme: 'primary-01',
    size: 'm',
    weight: 'regular',
    lineHeight: 'l'
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
    textAlign: {
        control: {
            type: 'select'
        }
    },
    weight: {
        control: {
            type: 'select'
        }
    },
    lineHeight: {
        control: {
            type: 'select'
        }
    }
};
