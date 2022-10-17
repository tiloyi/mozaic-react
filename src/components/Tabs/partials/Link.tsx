import React, { FC } from 'react';
import cn from 'classnames';
import { ITabsLinkProps } from '../Tabs.types';

const TabsLink: FC<ITabsLinkProps> = ({ children, isDisabled, isSelected, ...props }) => {
    const linkClassName = cn(
        'mc-tabs__element',
        isDisabled && 'mc-tabs__element--disabled',
        isSelected && 'mc-tabs__element--selected'
    );

    if (isDisabled) {
        return (
            <li className="mc-tabs__item" role="presentation">
                <span className={linkClassName} role="tab" aria-selected={isSelected} {...props}>
                    <span className="mc-tabs__text">{children}</span>
                </span>
            </li>
        );
    }

    return (
        <li className="mc-tabs__item" role="presentation">
            <a className={linkClassName} role="tab" aria-selected={isSelected} {...props}>
                <span className="mc-tabs__text">{children}</span>
            </a>
        </li>
    );
};

export default TabsLink;
