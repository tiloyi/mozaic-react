import React from 'react';
import { Story } from '@storybook/react';
import QuantitySelector from './QuantitySelector';
import { IQuantitySelectorProps } from './QuantitySelector.types';

const Template: Story<IQuantitySelectorProps> = args => <QuantitySelector {...args} />;

export const QuantitySelectorStory = Template.bind({});

QuantitySelectorStory.args = {
    value: 0
};

QuantitySelectorStory.storyName = 'Quantity Selector';

export const LabeledQuantitySelectorStory = Template.bind({});

LabeledQuantitySelectorStory.args = {
    label: 'Label',
    value: 0
};

LabeledQuantitySelectorStory.storyName = 'Labeled Quantity Selector';

export default {
    title: 'QuantitySelector',
    component: QuantitySelector,
    argTypes: {}
};
