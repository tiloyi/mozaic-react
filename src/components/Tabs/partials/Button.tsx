import React, { FC, useCallback, MouseEvent } from 'react';
import cn from 'classnames';
import { ITabsButtonProps } from '../Tabs.types';
import { useTabsContext } from '../TabsContext';

const TabsButton: FC<ITabsButtonProps> = ({
    children,
    tab,
    isDisabled,
    isSelected: isSelectedByProps,
    onClick,
    ...props
}) => {
    const tabsContext = useTabsContext();

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            onClick?.(event);

            if (tab) {
                tabsContext?.select(tab);
            }
        },
        [tab, onClick, tabsContext]
    );

    let isSelected = isSelectedByProps;

    if (tabsContext) {
        isSelected = tabsContext.tab === tab;
    }

    return (
        <li className="mc-tabs__item" role="presentation">
            <button
                type="button"
                className={cn(
                    'mc-tabs__element',
                    isDisabled && 'mc-tabs__element--disabled',
                    isSelected && 'mc-tabs__element--selected'
                )}
                role="tab"
                disabled={isDisabled}
                {...props}
                onClick={handleClick}
                aria-selected={isSelected}
            >
                <span className="mc-tabs__text">{children}</span>
            </button>
        </li>
    );
};

export default TabsButton;
