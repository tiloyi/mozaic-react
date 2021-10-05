import React from 'react';
import { Story } from '@storybook/react';
import { NotificationTitle, NotificationMessage, NotificationFooter } from './partials';
import Notification from './Notification';
import { INotificationProps, NotificationSize, NotificationTheme } from './Notification.types';

interface IStory extends INotificationProps {
    title?: string;
    message?: string;
}

const Template: Story<IStory> = ({ title = '', message = '', ...props }) => (
    <Notification {...props}>
        {title.length > 0 && <NotificationTitle>{title}</NotificationTitle>}
        {message.length > 0 && <NotificationMessage>{message}</NotificationMessage>}
    </Notification>
);

export const Controls = Template.bind({});

Controls.args = {
    title: 'Information notification',
    theme: NotificationTheme.Info,
    size: NotificationSize.M,
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
};

export default {
    title: 'Notification',
    component: Notification,
    argTypes: {
        theme: {
            control: {
                type: 'select'
            }
        },
        size: {
            control: {
                type: 'select'
            }
        }
    }
};
