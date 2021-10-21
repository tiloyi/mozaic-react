import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import DateInput from './DateInput';
import { IDateInputProps } from './DateInput.types';

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

export default {
    title: 'DateInput',
    component: DateInput,
    argTypes: {
        size: {
            control: {
                type: 'select'
            }
        }
    }
};
