import React from 'react';
import Portal from '../Portal';
import { INotificationsRendererProps } from './NotificationsProvider.types';
import { useNotifications, useNotificationsItems } from './NotificationsContext';
import './NotificationsRenderer.scss';
import NotificationsItem from './NotificationsItem';
import Notification from '../Notification';

const NotificationsRenderer = ({}: INotificationsRendererProps): JSX.Element | null => {
    const { notifications } = useNotificationsItems();
    const { remove } = useNotifications();

    if (notifications.length === 0) {
        return null;
    }

    return (
        <Portal id="notifications">
            <div className="mc-notifications-renderer">
                {notifications.map(({ ...notification }) => (
                    <NotificationsItem key={`notification-${notification.id}`}>
                        <Notification {...notification} isClosable onClose={() => remove(notification.id!)} />
                    </NotificationsItem>
                ))}
            </div>
        </Portal>
    );
};

export default NotificationsRenderer;
