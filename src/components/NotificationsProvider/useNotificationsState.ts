import { useCallback, useMemo, useState } from 'react';
import { INotificationsActions, INotificationsItem } from './NotificationsProvider.types';
import { nanoid } from 'nanoid';

export type TUseNotificationsState = [Array<INotificationsItem>, INotificationsActions];

export default function useNotificationsState(): TUseNotificationsState {
    const [notifications, setNotifications] = useState<Array<INotificationsItem>>([]);

    const add = useCallback((notification: INotificationsItem) => {
        const notificationId = notification.id ?? nanoid();

        setNotifications(prevNotifications => [...prevNotifications, { ...notification, id: notificationId }]);

        return notificationId;
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
