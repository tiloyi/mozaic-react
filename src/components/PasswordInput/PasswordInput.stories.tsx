import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import View from '../View';
import { IPasswordInputProps } from './PasswordInput.types';
import PasswordInput from './PasswordInput';

const Template: Story<IPasswordInputProps> = args => <PasswordInput {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    value: 'password',
    isDisabled: false
};

const ExampleTemplate: Story<IPasswordInputProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

    return <PasswordInput {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    isDisabled: false
};

const ReactHookFormTemplate: Story = () => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <PasswordInput {...register('password')} />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});

export const argTypes = {};
