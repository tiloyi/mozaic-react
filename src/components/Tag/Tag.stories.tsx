import React from 'react';
import { Story } from '@storybook/react';
import Tag from './Tag';
import { ITagProps } from './Tag.types';

export const Template: Story<ITagProps> = args => <Tag {...args}>tag</Tag>;

export const Controls = Template.bind({});

Controls.args = {
    type: 'text'
};

export const argTypes = {
    type: {
        control: {
            type: 'select'
        }
    },
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
