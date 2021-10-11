import { useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { INotificationsActions, INotificationsItem } from './NotificationsProvider.types';

const NOTIFICATION_DURATION = 5000;

export type TUseNotificationsState = [Array<INotificationsItem>, INotificationsActions];

export default function useNotificationsState(): TUseNotificationsState {
    const [notifications, setNotifications] = useState<Array<INotificationsItem>>([]);

    const add = useCallback((partial: Partial<INotificationsItem>) => {
        const notification: INotificationsItem = {
            ...partial,
            id: partial.id ?? nanoid(),
            duration: partial.duration ?? NOTIFICATION_DURATION,
            isClosable: partial.isClosable === undefined ? true : partial.isClosable,
            isAutoClosable: partial.isAutoClosable === undefined ? true : partial.isAutoClosable
        };

        setNotifications(prevNotifications => [...prevNotifications, notification]);

        return notification.id;
    }, []);

    const remove = useCallback((notificationId: string) => {
        setNotifications(prevNotifications =>
            prevNotifications.filter(notification => notification.id !== notificationId)
        );
    }, []);

    const update = useCallback(
        (notificationId: string, patch: Partial<INotificationsItem>) => {
            const index = notifications.findIndex(notification => notification.id === notificationId);

            if (index !== -1) {
                setNotifications(prevNotifications => [
                    ...prevNotifications.slice(0, index),
                    {
                        ...prevNotifications[index],
                        ...patch
                    },
                    ...prevNotifications.slice(index + 1)
                ]);
            }
        },
        [notifications]
    );

    const clear = useCallback(() => setNotifications([]), []);

    const actions = useMemo(() => ({ add, remove, update, clear }), [add, remove, update, clear]);

    return [notifications, actions];
}
