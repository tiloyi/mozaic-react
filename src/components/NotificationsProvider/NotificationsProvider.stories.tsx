import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonSize, ButtonTheme, ButtonVariant } from '../Button';
import { NotificationTheme } from '../Notification';
import { NotificationsProvider, useNotifications } from './NotificationsContext';
import NotificationsRenderer from './NotificationsRenderer';
import './NotificationsProvider.stories.scss';

const Example = (): JSX.Element => {
    const { add, info, success, warning, danger, update, remove, clear } = useNotifications();

    const addInfoNotification = (): void => {
        const notificationId = info({
            title: 'Info notification',
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        });

        console.log('Add notifications with id', notificationId);
    };

    const addSuccessNotification = (): string =>
        success({
            title: 'Success notification',
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        });

    const addDangerNotification = (): string =>
        danger({
            title: 'Danger notification',
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        });

    const addWarningNotification = (): string =>
        warning({
            title: 'Warning notification',
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        });

    const addHelloNotification = (): string =>
        add({
            id: 'hello',
            theme: NotificationTheme.Warning,
            title: 'Hello!',
            isClosable: false,
            isAutoClosable: false
        });

    const updateHelloNotification = (): void =>
        update('hello', {
            theme: NotificationTheme.Success,
            title: 'Hello, World!',
            isClosable: true,
            isAutoClosable: true
        });

    const removeHelloNotification = (): void => remove('hello');

    const buttonProps = {
        className: 'notificationsProviderStory__button',
        size: ButtonSize.S
    };

    return (
        <div className="notificationsProviderStory">
            <Button {...buttonProps} onClick={addInfoNotification}>
                Add "info" notification
            </Button>
            <Button {...buttonProps} theme={ButtonTheme.Primary02} onClick={addSuccessNotification}>
                Add "success" notification
            </Button>
            <Button {...buttonProps} theme={ButtonTheme.Danger} onClick={addDangerNotification}>
                Add "danger" notification
            </Button>
            <Button {...buttonProps} theme={ButtonTheme.Neutral} onClick={addWarningNotification}>
                Add "warning" notification
            </Button>
            <Button {...buttonProps} variant={ButtonVariant.Bordered} theme={ButtonTheme.Danger} onClick={clear}>
                Delete all notifications
            </Button>
            <Button
                {...buttonProps}
                variant={ButtonVariant.Bordered}
                theme={ButtonTheme.Neutral}
                onClick={addHelloNotification}
            >
                Add "Hello" notification
            </Button>
            <Button
                {...buttonProps}
                variant={ButtonVariant.Bordered}
                theme={ButtonTheme.Neutral}
                onClick={updateHelloNotification}
            >
                Update "Hello" notification
            </Button>
            <Button
                {...buttonProps}
                variant={ButtonVariant.Bordered}
                theme={ButtonTheme.Neutral}
                onClick={removeHelloNotification}
            >
                Remove "Hello" notification
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
