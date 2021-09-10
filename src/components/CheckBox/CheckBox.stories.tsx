import React from 'react';
import { Story } from '@storybook/react';
import CheckBox from './CheckBox';
import { ICheckBoxProps } from './CheckBox.types';

const ControlsTemplate: Story<ICheckBoxProps> = args => <CheckBox {...args}>Check box label</CheckBox>;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    isChecked: false,
    isDisabled: false,
    isInvalid: false
};

export default {
    title: 'CheckBox',
    component: CheckBox
};
