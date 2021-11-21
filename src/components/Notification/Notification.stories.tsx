import React from 'react';
import { Story } from '@storybook/react';
import Notification from './Notification';
import { INotificationProps } from './Notification.types';

const Template: Story<INotificationProps> = args => <Notification {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    title: 'Information notification',
    theme: 'info',
    size: 'm',
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

export const argTypes = {
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
};
