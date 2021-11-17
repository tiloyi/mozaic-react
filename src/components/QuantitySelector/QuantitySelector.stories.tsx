import React from 'react';
import { Story } from '@storybook/react';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import QuantitySelector from './QuantitySelector';

const Template: Story<IQuantitySelectorProps> = args => <QuantitySelector {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    size: 'm',
    isDisabled: false
};

export const argTypes = {
    size: {
        control: 'select'
    }
};
