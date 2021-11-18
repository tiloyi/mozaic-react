import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import QuantitySelector from './QuantitySelector';

const Template: Story<IQuantitySelectorProps> = args => <QuantitySelector {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    value: 100,
    size: 'm',
    isDisabled: false
};

export const Placeholder = Template.bind({});

Placeholder.args = {
    placeholder: 'Value',
    isDisabled: false
};

const ExampleTemplate: Story<IQuantitySelectorProps> = args => {
    const [value, setValue] = useState(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(parseFloat(event.target.value));

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
