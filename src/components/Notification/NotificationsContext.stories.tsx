import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonSize } from '../Button';
import { NotificationTheme } from './Notification.types';
import { NotificationsProvider, useNotifications } from './NotificationsContext';
import NotificationsRenderer from './NotificationsRenderer';
import './NotificationsContext.stories.scss';

const Example = () => {
    const { addNotification } = useNotifications();

    const addInfoNotification = () =>
        addNotification({
            theme: NotificationTheme.Info
        });

    const addSuccessNotification = () =>
        addNotification({
            theme: NotificationTheme.Success
        });

    const addDangerNotification = () =>
        addNotification({
            theme: NotificationTheme.Danger
        });

    const addWarningNotification = () =>
        addNotification({
            theme: NotificationTheme.Warning
        });

    const buttonProps = {
        className: 'notificationsContextStory__button',
        size: ButtonSize.S
    };

    return (
        <div className="notificationsContextStory">
            <Button {...buttonProps} onClick={addInfoNotification}>
                Add "info" notification
            </Button>
            <Button {...buttonProps} onClick={addSuccessNotification}>
                Add "success" notification
            </Button>
            <Button {...buttonProps} onClick={addDangerNotification}>
                Add "danger" notification
            </Button>
            <Button {...buttonProps} onClick={addWarningNotification}>
                Add "warning" notification
            </Button>
        </div>
    );
};

const Template: Story = () => (
    <NotificationsProvider>
        <Example />
        <NotificationsRenderer />
    </NotificationsProvider>
);

export const Notifications = Template.bind({});

export default {
    title: 'Notifications',
    component: NotificationsProvider
};
