import React from 'react';
import { Story } from '@storybook/react';
import Radio from './Radio';
import { IRadioProps } from './Radio.types';

const ControlsTemplate: Story<IRadioProps> = args => <Radio {...args}>Radio label</Radio>;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    isChecked: false,
    isDisabled: false,
    isInvalid: false
};
