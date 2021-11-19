import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import QuantitySelector from './QuantitySelector';

const Template: Story<IQuantitySelectorProps> = args => <QuantitySelector {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    defaultValue: 100,
    size: 'm',
    isDisabled: false
};

export const Placeholder = Template.bind({});

Placeholder.args = {
    placeholder: 'Value',
    isDisabled: false
};

export const Values = Template.bind({});

Values.args = {
    defaultValue: -5,
    minValue: 0,
    maxValue: 10,
    isDisabled: false
};

const ExampleTemplate: Story<IQuantitySelectorProps> = args => {
    const [value, setValue] = useState(0);

    const handleChange = (nextValue: number): void => setValue(nextValue);

    return <QuantitySelector {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.argTypes = {
    value: {
        table: {
            disable: true
        }
    }
};

export const argTypes = {
    size: {
        control: 'select'
    }
};
