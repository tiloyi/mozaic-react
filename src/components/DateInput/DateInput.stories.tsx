import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import View from '../View';
import Button from '../Button';
import { IDateInputProps } from './DateInput.types';
import DateInput from './DateInput';

const ControlsTemplate: Story<IDateInputProps> = args => <DateInput {...args} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: new Date().toISOString().split('T')[0],
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ExampleTemplate: Story<IDateInputProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

    return <DateInput {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ReactHookFormTemplate: Story = () => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <DateInput {...register('date')} />
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
