import React from 'react';
import { Story } from '@storybook/react';
import TextArea from './TextArea';
import { ITextAreaProps } from './TextArea.types';

const ControlsTemplate: Story<ITextAreaProps> = args => <TextArea {...args} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: 'lorem ipsum',
    isDisabled: false,
    isInvalid: false
};

export default {
    title: 'TextArea',
    component: TextArea
};
