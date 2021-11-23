import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import TextInput from './TextInput';
import { ITextInputProps } from './TextInput.types';

const ControlsTemplate: Story<ITextInputProps> = args => <TextInput {...args} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: 'lorem ipsum',
    size: 'm',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ExampleTemplate: Story<ITextInputProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

    return <TextInput {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    size: 'm',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    }
};
