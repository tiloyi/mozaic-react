import React from 'react';
import { Story } from '@storybook/react';
import Flag from '../Flag';

const Template: Story = () => <Flag>Click!</Flag>;

export const Primary = Template.bind({});

export default {
    title: 'Flag',
    component: Flag
};
