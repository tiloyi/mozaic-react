import React, { FC, useEffect } from 'react';
import { INotificationItemProps } from './NotificationsProvider.types';
import './NotificationsItem.scss';
import { useNotifications } from './NotificationsContext';

const NotificationsItem: FC<INotificationItemProps> = ({ children, id, duration, isAutoClosable }) => {
    const { remove } = useNotifications();

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        if (isAutoClosable) {
            timeoutId = setTimeout(() => remove(id), duration);
        }

        return () => {
            if (timeoutId !== null) {
                clearTimeout(timeoutId);
            }
        };
    }, [duration, isAutoClosable]);

    return <div className="mc-notifications-item">{children}</div>;
};

export default NotificationsItem;
