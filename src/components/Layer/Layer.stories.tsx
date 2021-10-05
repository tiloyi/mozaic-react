import React from 'react';
import { Story } from '@storybook/react';
import { ILayerProps } from './Layer.types';
import Layer from './Layer';

const Template: Story<ILayerProps> = args => <Layer {...args}/>;

export const LayerStory = Template.bind({});

LayerStory.args = {};

export default {
    title: 'Layer',
    component: Layer,
    argTypes: {}
};
