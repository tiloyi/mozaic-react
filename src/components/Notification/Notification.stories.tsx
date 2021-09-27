import React from 'react';
import { Story } from '@storybook/react';
import { INotificationProps } from './Notification.types';
import Notification from './Notification';

const Template: Story<INotificationProps> = args => <Notification {...args}/>;

export const NotificationStory = Template.bind({});

NotificationStory.args = {};

export default {
    title: 'Notification',
    component: Notification,
    argTypes: {}
};
