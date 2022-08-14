import React, { FC } from 'react';
import cn from 'classnames';
import { ITabsLinkProps } from '../Tabs.types';

const TabsLink: FC<ITabsLinkProps> = ({ children, isDisabled, isSelected, ...props }) => {
    const linkClassName = cn(
        'mc-tabs__link',
        isDisabled && 'mc-tabs__link--disabled',
        isSelected && 'mc-tabs__link--selected'
    );

    if (isDisabled) {
        return (
            <li className="mc-tabs__item" role="presentation">
                <span className={linkClassName} role="tab" aria-selected={isSelected} {...props}>
                    {children}
                </span>
            </li>
        );
    }

    return (
        <li className="mc-tabs__item" role="presentation">
            <a className={linkClassName} role="tab" aria-selected={isSelected} {...props}>
                {children}
            </a>
        </li>
    );
};

export default TabsLink;
