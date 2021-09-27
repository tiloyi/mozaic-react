import React, { FC } from 'react';
import { INotificationProps } from './Notification.types';
import './Notification.scss';

const Notification: FC<INotificationProps> = ({ children }): JSX.Element => {
    return <div>{children}</div>;
};

export default Notification;
