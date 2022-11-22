import React from 'react';
import cls from 'classnames';
import Portal from '../Portal';
import { useNotifications, useNotificationsItems } from './NotificationsContext';
import NotificationsItem from './NotificationsItem';
import Notification from '../Notification';
import { INotificationsRendererProps } from './NotificationsProvider.types';
import './NotificationsRenderer.scss';

const NotificationsRenderer = ({ position = 'bottom' }: INotificationsRendererProps): JSX.Element | null => {
    const { notifications } = useNotificationsItems();
    const { remove } = useNotifications();

    if (notifications.length === 0) {
        return null;
    }

    const items = notifications.filter(n => n.position === position);

    if (items.length === 0) {
        return null;
    }

    return (
        <Portal id={`${position}-notifications`}>
            <div className={cls('mc-notifications-renderer', `mc-notifications-renderer--${position}`)}>
                {(position === 'top' ? items.reverse() : items).map(item => (
                    <NotificationsItem
                        key={`notification-${item.id}`}
                        id={item.id}
                        duration={item.duration}
                        isAutoClosable={item.isAutoClosable}
                    >
                        <Notification
                            theme={item.theme}
                            size={item.size}
                            title={item.title}
                            message={item.message}
                            footer={item.footer}
                            isClosable={item.isClosable}
                            onClose={() => remove(item.id)}
                        />
                    </NotificationsItem>
                ))}
            </div>
        </Portal>
    );
};

export default NotificationsRenderer;
