import React from 'react';
import { Story } from '@storybook/react';
import { IProgressBarProps } from './ProgressBar.types';
import ProgressBar from './ProgressBar';

const Template: Story<IProgressBarProps> = args => <ProgressBar {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    value: 25,
    size: 'm',
    theme: 'branded',
    withValue: false
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
    renderValue: {
        table: {
            disable: true
        }
    }
};
