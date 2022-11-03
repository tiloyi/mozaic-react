import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { View } from '../View';
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

const ReactHookFormTemplate: Story = () => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <Toggle {...register('value')}>Toggle label</Toggle>
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    }
};
