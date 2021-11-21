import { useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { INotificationsActions, INotificationsItem, TThemedNotificationParams } from './NotificationsProvider.types';

const NOTIFICATION_DURATION = 5000;

export type TUseNotificationsState = [Array<INotificationsItem>, INotificationsActions];

export default function useNotificationsState(): TUseNotificationsState {
    const [notifications, setNotifications] = useState<Array<INotificationsItem>>([]);

    const add = useCallback((partial: Partial<INotificationsItem>) => {
        const notification: INotificationsItem = {
            ...partial,
            id: partial.id ? partial.id : nanoid(),
            duration: partial.duration === undefined ? NOTIFICATION_DURATION : partial.duration,
            isClosable: partial.isClosable === undefined ? true : partial.isClosable,
            isAutoClosable: partial.isAutoClosable === undefined ? true : partial.isAutoClosable
        };

        setNotifications(prevNotifications => [...prevNotifications, notification]);

        return notification.id;
    }, []);

    const info = useCallback((params: TThemedNotificationParams) => add({ ...params, theme: 'info' }), [add]);

    const success = useCallback((params: TThemedNotificationParams) => add({ ...params, theme: 'success' }), [add]);

    const warning = useCallback((params: TThemedNotificationParams) => add({ ...params, theme: 'warning' }), [add]);

    const danger = useCallback((params: TThemedNotificationParams) => add({ ...params, theme: 'danger' }), [add]);

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

    const actions = useMemo(
        () => ({ add, info, success, warning, danger, remove, update, clear }),
        [add, info, success, warning, danger, remove, update, clear]
    );

    return [notifications, actions];
}
