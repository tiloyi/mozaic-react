import React from 'react';
import { Story } from '@storybook/react';
import Button from '../Button';

const Template: Story = () => <Button>Click!</Button>;

export const ButtonStory = Template.bind({});

ButtonStory.storyName = 'Button';

export default {
    title: 'Button',
    component: Button
};
