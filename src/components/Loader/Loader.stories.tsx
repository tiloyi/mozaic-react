import React from 'react';
import { Story } from '@storybook/react';
import { ILoaderProps } from './Loader.types';
import Loader from './Loader';

const Template: Story<ILoaderProps> = args => <Loader {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    size: 'm',
    theme: 'dark'
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
