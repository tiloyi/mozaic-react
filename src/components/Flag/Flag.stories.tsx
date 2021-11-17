import React from 'react';
import { Story } from '@storybook/react';
import Flag from './Flag';
import { FlagTheme, FlagVariant, IFlagProps } from './Flag.types';

const Template: Story<IFlagProps> = args => <Flag {...args}>Flag</Flag>;

export const Controls = Template.bind({});

Controls.args = {
    theme: FlagTheme.Primary,
    variant: FlagVariant.Solid
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
