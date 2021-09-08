import React from 'react';
import { Story } from '@storybook/react';
import Radio from './Radio';
import { IRadioProps } from './Radio.types';

const Template: Story<IRadioProps> = args => <Radio {...args}>Radio label</Radio>;

export const RadioStory = Template.bind({});

RadioStory.args = {
    isChecked: false,
    isDisabled: false,
    isInvalid: false
};

RadioStory.storyName = 'Radio';

export default {
    title: 'Radio',
    component: Radio
};
