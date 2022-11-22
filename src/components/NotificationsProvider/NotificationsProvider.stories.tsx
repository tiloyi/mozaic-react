import React from 'react';
import { Story } from '@storybook/react';
import Button from '../Button';
import { NotificationsProvider, useNotifications } from './NotificationsContext';
import NotificationsRenderer from './NotificationsRenderer';
import './NotificationsProvider.stories.scss';
import { INotificationsRendererProps } from './NotificationsProvider.types';

const Example = ({ position }: INotificationsRendererProps): JSX.Element => {
    const { add, info, success, warning, danger, update, remove, clear } = useNotifications();

    const addInfoNotification = (): void => {
        const notificationId = info(
            {
                title: 'Info notification',
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            },
            position
        );

        // eslint-disable-next-line no-console
        console.log('Add notifications with id', notificationId);
    };

    const addSuccessNotification = (): string =>
        success(
            {
                title: 'Success notification',
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            },
            position
        );

    const addDangerNotification = (): string =>
        danger(
            {
                title: 'Danger notification',
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            },
            position
        );

    const addWarningNotification = (): string =>
        warning(
            {
                title: 'Warning notification',
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            },
            position
        );

    const addHelloNotification = (): string =>
        add(
            {
                id: 'hello',
                theme: 'warning',
                title: 'Hello!',
                isClosable: false,
                isAutoClosable: false
            },
            position
        );

    const updateHelloNotification = (): void =>
        update('hello', {
            theme: 'success',
            title: 'Hello, World!',
            isClosable: true,
            isAutoClosable: true
        });

    const removeHelloNotification = (): void => remove('hello');

    return (
        <div className="notificationsProviderStory">
            <Button className="notificationsProviderStory__button" size="s" onClick={addInfoNotification}>
                Add info notification
            </Button>
            <Button
                className="notificationsProviderStory__button"
                size="s"
                theme="primary-02"
                onClick={addSuccessNotification}
            >
                Add success notification
            </Button>
            <Button
                className="notificationsProviderStory__button"
                size="s"
                theme="danger"
                onClick={addDangerNotification}
            >
                Add danger notification
            </Button>
            <Button
                className="notificationsProviderStory__button"
                size="s"
                theme="neutral"
                onClick={addWarningNotification}
            >
                Add warning notification
            </Button>
            <Button
                className="notificationsProviderStory__button"
                size="s"
                variant="bordered"
                theme="danger"
                onClick={clear}
            >
                Delete all notifications
            </Button>
            <Button
                className="notificationsProviderStory__button"
                size="s"
                variant="bordered"
                theme="neutral"
                onClick={addHelloNotification}
            >
                Add Hello notification
            </Button>
            <Button
                className="notificationsProviderStory__button"
                size="s"
                variant="bordered"
                theme="neutral"
                onClick={updateHelloNotification}
            >
                Update Hello notification
            </Button>
            <Button
                className="notificationsProviderStory__button"
                size="s"
                variant="bordered"
                theme="neutral"
                onClick={removeHelloNotification}
            >
                Remove Hello notification
            </Button>
        </div>
    );
};

const BottomNotificationsTemplate: Story = () => (
    <NotificationsProvider>
        <Example position="bottom" />
        <NotificationsRenderer position="bottom" />
    </NotificationsProvider>
);

export const BottomNotifications = BottomNotificationsTemplate.bind({});

const TopNotificationsTemplate: Story = () => (
    <NotificationsProvider>
        <Example position="top" />
        <NotificationsRenderer position="top" />
    </NotificationsProvider>
);

export const TopNotifications = TopNotificationsTemplate.bind({});
