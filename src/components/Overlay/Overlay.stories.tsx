import React from 'react';
import { Story } from '@storybook/react';
import { IOverlayProps } from './Overlay.types';
import Overlay from './Overlay';

const Template: Story<IOverlayProps> = args => <Overlay {...args}/>;

export const OverlayStory = Template.bind({});

OverlayStory.args = {};

export default {
    title: 'Overlay',
    component: Overlay,
    argTypes: {}
};
