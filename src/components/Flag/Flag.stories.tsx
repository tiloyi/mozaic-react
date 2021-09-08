import React from 'react';
import { Story } from '@storybook/react';
import Flag from '../Flag';
import { IFlagProps } from './Flag.types';

const Template: Story<IFlagProps> = (...args) => <Flag {...args}>Flag</Flag>;

export const Primary = Template.bind({});

export default {
    title: 'Flag',
    component: Flag
};
