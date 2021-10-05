import React, { FC } from 'react';
import { NotificationContainer } from './partials';
import { INotificationProps } from './Notification.types';
import './Notification.scss';

const Notification: FC<INotificationProps> = ({ children, ...props }): JSX.Element => {
    return <NotificationContainer {...props}>{children}</NotificationContainer>;
};

export default Notification;
