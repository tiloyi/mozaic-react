import React from 'react';
import { Story } from '@storybook/react';
import Flag from './Flag';
import { IFlagProps } from './Flag.types';

const Template: Story<IFlagProps> = args => <Flag {...args}>Flag</Flag>;

export const Controls = Template.bind({});

Controls.args = {
    theme: 'primary',
    variant: 'solid'
};

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    },
    variant: {
        control: {
            type: 'select'
        }
    }
};
