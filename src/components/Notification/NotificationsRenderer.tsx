import React from 'react';
import Portal from '../Portal';
import { INotificationsRendererProps } from './Notification.types';
import './NotificationsRenderer.scss';
import { useNotificationsState } from './NotificationsContext';

const NotificationsRenderer = ({}: INotificationsRendererProps): JSX.Element | null => {
    const { notifications } = useNotificationsState();

    if (notifications.length === 0) {
        return null;
    }

    return (
        <Portal id="notifications">
            <div className="mc-notifications-renderer">Renders notifications soon!</div>
        </Portal>
    );
};

export default NotificationsRenderer;
