import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { IListBoxItemProps } from '../ListBox.types';
import { useListBoxContext } from '../ListBoxContext';
import CheckBox from '../../CheckBox';

const ListBoxItem: FC<IListBoxItemProps> = ({ className, children, icon, value, isDisabled, ...props }) => {
    const { mode, values, value: contextValue, onClick } = useListBoxContext();

    const handleClick = useCallback(() => {
        if (mode !== 'none' && value !== undefined) {
            onClick?.(value);
        }
    }, [mode, value, onClick]);

    let isChecked = false;

    if (mode === 'single' && value !== undefined) {
        isChecked = contextValue === value;
    }

    if (mode === 'multi' && value !== undefined) {
        isChecked = (values ?? []).includes(value);
    }

    return (
        <li
            className={cn(
                'mc-listbox__item',
                mode === 'single' && isChecked && 'is-checked',
                isDisabled && 'is-disabled',
                className
            )}
            role="option"
            aria-selected={isChecked}
            onClick={handleClick}
            {...props}
        >
            {icon}
            <div className="mc-listbox__content">{children}</div>
            {mode === 'multi' && <CheckBox isChecked={isChecked} />}
        </li>
    );
};

export default ListBoxItem;
