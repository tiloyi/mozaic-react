import React, { FC } from 'react';
import './NotificationsItem.scss';

const NotificationsItem: FC = ({ children }) => {
    return <div className="mc-notifications-item">{children}</div>;
};

export default NotificationsItem;
