import React from 'react';
import cn from 'classnames';
import { INotificationCloseButtonProps } from '../Notification.types';

const NotificationCloseButton = ({ className, ...props }: INotificationCloseButtonProps) => (
    <button type="button" className={cn('mc-notification-closable__close', className)} {...props} />
);

export default NotificationCloseButton;
