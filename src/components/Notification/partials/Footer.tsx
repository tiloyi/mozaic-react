import React, { FC } from 'react';
import cn from 'classnames';
import { INotificationPartialProps } from '../Notification.types';

const NotificationFooter: FC<INotificationPartialProps> = ({ className, children }) => (
    <footer className={cn('mc-notification__footer', className)}>{children}</footer>
);

export default NotificationFooter;
