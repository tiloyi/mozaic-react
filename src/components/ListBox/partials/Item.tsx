import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { CheckBoxContainer, CheckBoxIndicator, CheckBoxLabel } from '../../CheckBox';
import { IListBoxItemProps } from '../ListBox.types';
import { useListBoxContext } from '../ListBoxContext';

const ListBoxItem: FC<IListBoxItemProps> = ({ className, children, icon, value, isDisabled, ...props }) => {
    const { mode, values, value: contextValue, onClick } = useListBoxContext();

    const handleClick = useCallback(() => onClick?.(value), [value, onClick]);

    let isChecked = false;

    if (mode === 'single' && value !== undefined) {
        isChecked = contextValue === value;
    }

    if (mode === 'multi' && value !== undefined) {
        isChecked = (values ?? []).includes(value);
    }

    if (mode !== 'multi') {
        return (
            <li
                className={cn(
                    'mc-listbox__item',
                    mode === 'single' && isChecked && 'is-checked',
                    isDisabled && 'is-disabled',
                    className
                )}
                role="option"
                aria-disabled={isDisabled}
                aria-selected={isChecked}
                onClick={handleClick}
                {...props}
            >
                {icon}
                <div className="mc-listbox__content">{children}</div>
            </li>
        );
    }

    return (
        <li
            className={cn('mc-listbox__item', isDisabled && 'is-disabled', className)}
            role="option"
            aria-disabled={isDisabled}
            aria-selected={isChecked}
            {...props}
        >
            <CheckBoxContainer>
                <CheckBoxLabel>
                    {icon}
                    <div className="mc-listbox__content">{children}</div>
                </CheckBoxLabel>
                <CheckBoxIndicator onChange={handleClick} isChecked={isChecked} isDisabled={isDisabled} tabIndex={-1} />
            </CheckBoxContainer>
        </li>
    );
};

export default ListBoxItem;
