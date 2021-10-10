import React, { FC } from 'react';
import cn from 'classnames';
import { INotificationContainerProps } from '../Notification.types';

const blockClassName = 'mc-notification';

const NotificationContainer: FC<INotificationContainerProps> = ({
    className,
    children,
    theme,
    size,
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

    return (
        <div className={containerClassName} {...props}>
            <div className={`${blockClassName}__content`}>{children}</div>
        </div>
    );
};

export default NotificationContainer;
