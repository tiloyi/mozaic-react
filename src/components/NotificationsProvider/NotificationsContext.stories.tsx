import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonSize } from '../Button';
import { NotificationTheme } from '../Notification';
import { NotificationsProvider, useNotifications } from './NotificationsContext';
import NotificationsRenderer from './NotificationsRenderer';
import './NotificationsContext.stories.scss';

const Example = () => {
    const { addNotification } = useNotifications();

    const addInfoNotification = () =>
        addNotification({
            theme: NotificationTheme.Info,
            title: 'Info notification'
        });

    const addSuccessNotification = () =>
        addNotification({
            theme: NotificationTheme.Success,
            title: 'Success notification'
        });

    const addDangerNotification = () =>
        addNotification({
            theme: NotificationTheme.Danger,
            title: 'Danger notification'
        });

    const addWarningNotification = () =>
        addNotification({
            theme: NotificationTheme.Warning,
            title: 'Warning notification'
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
    title: 'NotificationsProvider',
    component: NotificationsProvider
};
