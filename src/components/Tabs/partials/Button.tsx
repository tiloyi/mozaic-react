import React, { FC } from 'react';
import { ITabsButtonProps } from '../Tabs.types';

const TabsLink: FC<ITabsButtonProps> = ({ children, ...props }) => {
    return (
        <li className="mc-tabs__item" role="presentation">
            <button type="button" className="mc-tabs__link" role="tab" {...props}>
                {children}
            </button>
        </li>
    );
};

export default TabsLink;
