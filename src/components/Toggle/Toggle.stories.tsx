import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Toggle from './Toggle';
import { IToggleProps, ToggleSize } from './Toggle.types';

const ControlsTemplate: Story<IToggleProps> = args => <Toggle {...args}>Toggle label</Toggle>;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    size: ToggleSize.M,
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
    size: ToggleSize.M,
    isDisabled: false
};

Example.argTypes = {
    isChecked: {
        table: {
            disable: true
        }
    }
};

export default {
    title: 'Toggle',
    component: Toggle,
    argTypes: {
        size: {
            control: {
                type: 'select'
            },
            options: [ToggleSize.S, ToggleSize.M]
        }
    }
};
