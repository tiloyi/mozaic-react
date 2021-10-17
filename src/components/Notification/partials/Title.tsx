import React, { FC } from 'react';
import cn from 'classnames';
import { INotificationPartialProps } from '../Notification.types';

const NotificationTitle: FC<INotificationPartialProps> = ({ className, children }) => {
    return <h3 className={cn('mc-notification__title', className)}>{children}</h3>;
};

export default NotificationTitle;
