import React, { useState } from 'react';
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

const ExampleTemplate: Story<ICheckBoxProps> = ({ isDisabled, isInvalid }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <CheckBox
            isDisabled={isDisabled}
            isChecked={isChecked}
            isInvalid={isInvalid}
            onChange={() => setIsChecked(previous => !previous)}
        >
            Check box label
        </CheckBox>
    );
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    isDisabled: false,
    isInvalid: false
};

Example.argTypes = {
    isChecked: {
        table: {
            disable: true
        }
    }
};

export default {
    title: 'CheckBox',
    component: CheckBox
};
