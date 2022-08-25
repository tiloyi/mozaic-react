import React, { FC, useState } from 'react';
import cn from 'classnames';

import { IListBoxItemProps } from '../ListBox.types';
import { useListBoxContext } from '../ListBoxContext';

const ListBoxItem: FC<IListBoxItemProps> = ({ id, icon, isDisabled, children, ...props }) => {
    const [isFocused, setFocused] = useState(false);
    const { isItemChecked, check } = useListBoxContext();

    const onClickHandler = (): void => {
        if (!isDisabled) {
            check(id);
        }
    };

    const onFocusHandler = (): void => {
        setFocused(true);
    };

    const onBlurHandler = (): void => {
        setFocused(false);
    };

    return (
        <button
            className="mc-listbox__item-button"
            onClick={onClickHandler}
            type="button"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            aria-label="listbox item button"
        >
            <li
                aria-label="listbox item"
                className={cn(
                    'mc-listbox__item',
                    isItemChecked(id) && 'is-checked',
                    isFocused && 'is-focus',
                    isDisabled && 'is-disabled'
                )}
                {...props}
            >
                {icon}
                <span className="mc-listbox__label">{children}</span>
            </li>
        </button>
    );
};

export default ListBoxItem;
