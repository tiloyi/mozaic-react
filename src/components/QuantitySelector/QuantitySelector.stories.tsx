import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import QuantitySelector from './QuantitySelector';

const Template: Story<IQuantitySelectorProps> = args => <QuantitySelector {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    defaultValue: 5,
    size: 'm',
    maxValue: 10,
    minValue: 0,
    placeholder: 'Placeholder text',
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
    const [value, setValue] = useState<number | undefined>(0);

    const handleChange = (nextValue?: number): void => setValue(nextValue);

    return <QuantitySelector {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    step: 0.5,
    minValue: 0,
    maxValue: 10,
    isDisabled: false
};

Example.argTypes = {
    defaultValue: {
        table: {
            disable: true
        }
    },
    value: {
        table: {
            disable: true
        }
    },
    onChange: {
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
