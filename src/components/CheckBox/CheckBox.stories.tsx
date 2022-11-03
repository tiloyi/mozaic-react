import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import { View } from '../View';
import { ICheckBoxProps } from './CheckBox.types';
import CheckBox from './CheckBox';

const ControlsTemplate: Story<ICheckBoxProps> = args => <CheckBox {...args}>Check box label</CheckBox>;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    isChecked: false,
    isDisabled: false,
    isInvalid: false,
    isIndeterminate: false
};

const ExampleTemplate: Story<ICheckBoxProps> = ({ isDisabled, isInvalid, isIndeterminate }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <CheckBox
            isDisabled={isDisabled}
            isChecked={isChecked}
            isInvalid={isInvalid}
            isIndeterminate={isIndeterminate}
            onChange={() => setIsChecked(previous => !previous)}
        >
            Check box label
        </CheckBox>
    );
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    isDisabled: false,
    isInvalid: false,
    isIndeterminate: false
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
                <CheckBox {...register('value')}>Label</CheckBox>
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});
