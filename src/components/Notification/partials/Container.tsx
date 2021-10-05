import React, { FC } from 'react';
import cn from 'classnames';
import { INotificationContainerProps } from '../Notification.types';

const blockClassName = 'mc-notification';

const NotificationContainer: FC<INotificationContainerProps> = ({ className, children, theme, size, ...props }) => {
    const containerClassName = cn(
        'mc-notification',
        className,
        theme && `${blockClassName}--${theme}`,
        size && `${blockClassName}--${size}`
    );

    return (
        <div className={containerClassName} {...props}>
            <div className="mc-notification__content">{children}</div>
        </div>
    );
};

export default NotificationContainer;
