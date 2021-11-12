import React from 'react';
import { Story } from '@storybook/react';
import { IOverlayProps } from './Overlay.types';
import Overlay from './Overlay';

const Template: Story<IOverlayProps> = args => <Overlay {...args}>Overlay</Overlay>;

export const OverlayStory = Template.bind({});

OverlayStory.args = {
    isVisible: true
};

export default {
    title: 'Components/Overlay',
    component: Overlay,
    argTypes: {}
};
