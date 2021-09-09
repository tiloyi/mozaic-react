import React from 'react';
import { Story } from '@storybook/react';
import Toggle from './Toggle';
import { IToggleProps } from './Toggle.types';

const Template: Story<IToggleProps> = args => <Toggle {...args}>Toggle label</Toggle>;

export const ToggleStory = Template.bind({});

ToggleStory.args = {
    isChecked: false,
    isDisabled: false
};

ToggleStory.storyName = 'Toggle';

export default {
    title: 'Toggle',
    component: Toggle
};
