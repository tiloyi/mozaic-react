import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RemovableTag from './RemovableTag';
import { IRemovableTagProps } from './Tag.types';

export const Template: Story<IRemovableTagProps> = args => <RemovableTag {...args}>tag</RemovableTag>;

export const Controls = Template.bind({});

Controls.args = {
    size: 'm',
    theme: 'light',
    onRemove: action('Remove!')
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
