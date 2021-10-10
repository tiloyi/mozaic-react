import React from 'react';
import Portal from '../Portal';
import { INotificationsRendererProps } from './NotificationsProvider.types';
import { useNotificationsState } from './NotificationsContext';
import './NotificationsRenderer.scss';
import NotificationsItem from './NotificationsItem';
import Notification from '../Notification';

const NotificationsRenderer = ({}: INotificationsRendererProps): JSX.Element | null => {
    const { notifications } = useNotificationsState();

    if (notifications.length === 0) {
        return null;
    }

    return (
        <Portal id="notifications">
            <div className="mc-notifications-renderer">
                {notifications.map(({ ...notification }, index) => (
                    <NotificationsItem key={`notification-${index}`}>
                        <Notification {...notification} />
                    </NotificationsItem>
                ))}
            </div>
        </Portal>
    );
};

export default NotificationsRenderer;
