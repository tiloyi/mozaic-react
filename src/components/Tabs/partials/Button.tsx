import React, { FC } from 'react';
import cn from 'classnames';
import { ITabsButtonProps } from '../Tabs.types';

const TabsButton: FC<ITabsButtonProps> = ({ children, isDisabled, ...props }) => {
    return (
        <li className="mc-tabs__item" role="presentation">
            <button
                type="button"
                className={cn('mc-tabs__link', isDisabled && 'mc-tabs__link--disabled')}
                role="tab"
                disabled={isDisabled}
                {...props}
            >
                {children}
            </button>
        </li>
    );
};

export default TabsButton;
