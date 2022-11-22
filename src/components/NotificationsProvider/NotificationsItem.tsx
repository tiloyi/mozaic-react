import React, { FC, useEffect } from 'react';
import { INotificationItemProps } from './NotificationsProvider.types';
import { useNotifications } from './NotificationsContext';
import './NotificationsItem.scss';

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
    }, [duration, isAutoClosable, id, remove]);

    return <div className="mc-notifications-item">{children}</div>;
};

export default NotificationsItem;
