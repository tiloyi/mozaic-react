import React from 'react';
import { Story } from '@storybook/react';
import SelectableTag from './SelectableTag';
import { ISelectableTagProps } from './Tag.types';

export const Template: Story<ISelectableTagProps> = args => <SelectableTag {...args}>tag</SelectableTag>;

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
