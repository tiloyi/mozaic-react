import React, { FC, useEffect } from 'react';
import { INotificationItemProps } from './NotificationsProvider.types';
import './NotificationsItem.scss';
import { useNotifications } from './NotificationsContext';

const NotificationsItem: FC<INotificationItemProps> = ({ children, id, duration }) => {
    const { remove } = useNotifications();

    useEffect(() => {
        const timeoutId = setTimeout(() => remove(id), duration);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [duration]);

    return <div className="mc-notifications-item">{children}</div>;
};

export default NotificationsItem;
