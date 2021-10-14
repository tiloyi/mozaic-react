import React, { FC } from 'react';
import cn from 'classnames';
import { ITabButtonItemProps } from '../../Tabs.types';

const TabButtonItem: FC<ITabButtonItemProps> = ({ children, onClick, isSelected, ...restProps }) => {
    return (
        <li className="mc-tabs__item" role="presentation">
            <button
                {...restProps}
                onClick={onClick}
                role="tab"
                aria-selected={isSelected}
                className={cn('mc-tabs__link', isSelected && 'mc-tabs__link--selected')}
            >
                {children}
            </button>
        </li>
    );
};

export default TabButtonItem;
