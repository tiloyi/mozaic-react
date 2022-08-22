import React from 'react';
import { Story } from '@storybook/react';
import TextTag from './TextTag';
import { ITextTagProps } from './Tag.types';

export const Template: Story<ITextTagProps> = args => <TextTag {...args}>tag</TextTag>;

export const Controls = Template.bind({});

Controls.args = {
    size: 'm',
    theme: 'light'
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
    }
};
