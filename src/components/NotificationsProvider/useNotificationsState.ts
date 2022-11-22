import { useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import {
    INotificationsActions,
    INotificationsItem,
    TNotificationPosition,
    TThemedNotificationParams
} from './NotificationsProvider.types';

const DEFAULT_NOTIFICATION_DURATION = 5000;
const DEFAULT_NOTIFICATION_POSITION = 'bottom';

export type TUseNotificationsState = [Array<INotificationsItem>, INotificationsActions];

export default function useNotificationsState(): TUseNotificationsState {
    const [notifications, setNotifications] = useState<Array<INotificationsItem>>([]);

    const add = useCallback((partial: Partial<INotificationsItem>, position?: TNotificationPosition) => {
        const notificationPosition = position === undefined ? DEFAULT_NOTIFICATION_POSITION : position;

        const notification: INotificationsItem = {
            ...partial,
            id: partial.id ? partial.id : nanoid(),
            duration: partial.duration === undefined ? DEFAULT_NOTIFICATION_DURATION : partial.duration,
            isClosable: partial.isClosable === undefined ? true : partial.isClosable,
            isAutoClosable: partial.isAutoClosable === undefined ? true : partial.isAutoClosable,
            position: notificationPosition
        };

        setNotifications(prevNotifications => [...prevNotifications, notification]);

        return notification.id;
    }, []);

    const info = useCallback(
        (params: TThemedNotificationParams, position = 'bottom') => add({ ...params, theme: 'info' }, position),
        [add]
    );

    const success = useCallback(
        (params: TThemedNotificationParams, position = 'bottom') => add({ ...params, theme: 'success' }, position),
        [add]
    );

    const warning = useCallback(
        (params: TThemedNotificationParams, position = 'bottom') => add({ ...params, theme: 'warning' }, position),
        [add]
    );

    const danger = useCallback(
        (params: TThemedNotificationParams, position = 'bottom') => add({ ...params, theme: 'danger' }, position),
        [add]
    );

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
