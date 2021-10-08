import React from 'react';
import Portal from '../Portal';
import { INotificationsRendererProps } from './NotificationsProvider.types';
import { useNotificationsState } from './NotificationsContext';
import './NotificationsRenderer.scss';
import NotificationsItem from './NotificationsItem';
import Notification, { NotificationMessage, NotificationTitle } from '../Notification';

const NotificationsRenderer = ({}: INotificationsRendererProps): JSX.Element | null => {
    const { notifications } = useNotificationsState();

    if (notifications.length === 0) {
        return null;
    }

    return (
        <Portal id="notifications">
            <div className="mc-notifications-renderer">
                {notifications.map((notification, index) => (
                    <NotificationsItem key={`notification-${index}`}>
                        <Notification theme={notification.theme} size={notification.size}>
                            {notification.title && notification.title.length > 0 && (
                                <NotificationTitle>{notification.title}</NotificationTitle>
                            )}
                            {notification.message && notification.message.length > 0 && (
                                <NotificationMessage>{notification.message}</NotificationMessage>
                            )}
                        </Notification>
                    </NotificationsItem>
                ))}
            </div>
        </Portal>
    );
};

export default NotificationsRenderer;
