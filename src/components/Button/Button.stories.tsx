import React from 'react';
import { Story } from '@storybook/react';
import { default as ButtonComponent } from '../Button';

const Template: Story = () => <ButtonComponent>Click!</ButtonComponent>;

export const Button = Template.bind({});

export default {
    title: 'Button',
    component: ButtonComponent
};
