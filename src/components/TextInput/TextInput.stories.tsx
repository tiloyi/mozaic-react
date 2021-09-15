import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import TextInput from './TextInput';
import { ITextInputProps, TextInputSize } from './TextInput.types';

const ControlsTemplate: Story<ITextInputProps> = args => <TextInput {...args} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: 'lorem ipsum',
    size: TextInputSize.M,
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ExampleTemplate: Story<ITextInputProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

    return <TextInput {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    size: TextInputSize.M,
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

export default {
    title: 'TextInput',
    component: TextInput,
    argTypes: {
        size: {
            control: {
                type: 'select'
            }
        }
    }
};
