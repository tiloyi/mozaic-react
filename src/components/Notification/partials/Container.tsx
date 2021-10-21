import React, { FC } from 'react';
import cn from 'classnames';
import { INotificationContainerProps, NotificationTheme } from '../Notification.types';

const blockClassName = 'mc-notification';

const NotificationContainer: FC<INotificationContainerProps> = ({
    className,
    children,
    theme,
    size,
    role,
    isClosable,
    ...props
}) => {
    const containerClassName = cn(
        blockClassName,
        className,
        theme && `${blockClassName}--${theme}`,
        size && `${blockClassName}--${size}`,
        isClosable && `${blockClassName}-closable`
    );

    const containerRole = theme === NotificationTheme.Danger ? 'alert' : 'status';

    return (
        <div className={containerClassName} role={role || containerRole} {...props}>
            <div className={`${blockClassName}__content`}>{children}</div>
        </div>
    );
};

export default NotificationContainer;
