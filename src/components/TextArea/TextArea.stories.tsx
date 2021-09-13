import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import TextArea from './TextArea';
import { ITextAreaProps } from './TextArea.types';

const ControlsTemplate: Story<ITextAreaProps> = args => <TextArea {...args} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: 'lorem ipsum',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ExampleTemplate: Story<ITextAreaProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value);

    return <TextArea {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

export default {
    title: 'TextArea',
    component: TextArea
};
