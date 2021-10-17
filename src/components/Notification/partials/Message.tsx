import React, { FC } from 'react';
import cn from 'classnames';
import { INotificationPartialProps } from '../Notification.types';

const NotificationMessage: FC<INotificationPartialProps> = ({ className, children }) => {
    return <div className={cn('mc-notification__message', className)}>{children}</div>;
};

export default NotificationMessage;
