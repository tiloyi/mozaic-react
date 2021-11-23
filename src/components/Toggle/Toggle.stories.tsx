import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Toggle from './Toggle';
import { IToggleProps } from './Toggle.types';

const ControlsTemplate: Story<IToggleProps> = args => <Toggle {...args}>Toggle label</Toggle>;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    size: 'm',
    isChecked: false,
    isDisabled: false,
    onChange() {}
};

const ExampleTemplate: Story<IToggleProps> = ({ size, isDisabled }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Toggle
            size={size}
            isDisabled={isDisabled}
            isChecked={isChecked}
            onChange={() => setIsChecked(previous => !previous)}
        >
            Toggle label
        </Toggle>
    );
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    size: 'm',
    isDisabled: false
};

Example.argTypes = {
    isChecked: {
        table: {
            disable: true
        }
    }
};

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    }
};
