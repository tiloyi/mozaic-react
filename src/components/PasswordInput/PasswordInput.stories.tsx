import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { IPasswordInputProps } from './PasswordInput.types';
import PasswordInput from './PasswordInput';

const Template: Story<IPasswordInputProps> = args => <PasswordInput {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    value: 'password',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ExampleTemplate: Story<IPasswordInputProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

    return <PasswordInput {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

export const argTypes = {};
