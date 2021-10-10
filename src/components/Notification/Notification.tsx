import React from 'react';
import { NotificationContainer, NotificationFooter, NotificationMessage, NotificationTitle } from './partials';
import { INotificationProps } from './Notification.types';
import './Notification.scss';

const Notification = ({ className, theme, size, title, message, footer }: INotificationProps): JSX.Element => (
    <NotificationContainer className={className} theme={theme} size={size}>
        {title && <NotificationTitle>{title}</NotificationTitle>}
        {message && <NotificationMessage>{message}</NotificationMessage>}
        {footer && <NotificationFooter>{footer}</NotificationFooter>}
    </NotificationContainer>
);

export default Notification;
