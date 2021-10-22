import React, { FC } from 'react';

const TabItem: FC<{}> = ({ children }) => {
    return (
        <li className="mc-tabs__item" role="presentation">
            {children}
        </li>
    );
};

export default TabItem;
