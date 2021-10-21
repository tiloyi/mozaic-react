import React from 'react';
import { Story } from '@storybook/react';
import Notification from './Notification';
import { INotificationProps, NotificationSize, NotificationTheme } from './Notification.types';

const Template: Story<INotificationProps> = args => <Notification {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    title: 'Information notification',
    theme: NotificationTheme.Info,
    size: NotificationSize.M,
    message:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    isClosable: true
};

Controls.argTypes = {
    footer: {
        table: {
            disable: true
        }
    },
    onClose: {
        table: {
            disable: true
        }
    }
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
