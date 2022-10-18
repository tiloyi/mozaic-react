import React from 'react';
import { Story } from '@storybook/react';
import { IOptionButtonProps } from './OptionButton.types';
import OptionButton from './OptionButton';

const ControlsTemplate: Story<IOptionButtonProps> = args => <OptionButton {...args}>Option button label</OptionButton>;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    isChecked: false,
    isDisabled: false,
    type: 'radio',
    width: 'fit'
};

export const argTypes = {
    width: {
        control: {
            type: 'select'
        }
    },
    type: {
        control: {
            type: 'select'
        }
    },
    onChange: {
        table: {
            disable: true
        }
    }
};
