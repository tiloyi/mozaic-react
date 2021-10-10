import React from 'react';
import {
    NotificationCloseButton,
    NotificationContainer,
    NotificationFooter,
    NotificationMessage,
    NotificationTitle
} from './partials';
import { INotificationProps } from './Notification.types';
import './Notification.scss';

const Notification = ({ title, message, footer, isClosable, onClose, ...props }: INotificationProps): JSX.Element => (
    <NotificationContainer {...props} isClosable={isClosable}>
        {title && <NotificationTitle>{title}</NotificationTitle>}
        {message && <NotificationMessage>{message}</NotificationMessage>}
        {footer && <NotificationFooter>{footer}</NotificationFooter>}
        {isClosable && <NotificationCloseButton aria-label="Close" onClick={() => onClose?.()} />}
    </NotificationContainer>
);

export default Notification;
