import React, { FC } from 'react';
import { ITabsLinkProps } from '../Tabs.types';

const TabsLink: FC<ITabsLinkProps> = ({ children, ...props }) => {
    return (
        <li className="mc-tabs__item" role="presentation">
            <a className="mc-tabs__link" role="tab" {...props}>
                {children}
            </a>
        </li>
    );
};

export default TabsLink;
