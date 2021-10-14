import React, { FC } from 'react';
import cn from 'classnames';
import { ITabLinkItemProps } from '../../Tabs.types';

const TabLinkItem: FC<ITabLinkItemProps> = ({ link, isSelected, children, ...restProps }) => {
    return (
        <li className="mc-tabs__item" role="presentation">
            <a
                {...restProps}
                href={link}
                role="tab"
                aria-selected={isSelected}
                className={cn('mc-tabs__link', isSelected && 'mc-tabs__link--selected')}
            >
                {children}
            </a>
        </li>
    );
};

export default TabLinkItem;
