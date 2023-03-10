import React, { forwardRef, useCallback } from 'react';
import cn from 'classnames';
import { useOptionGroup } from '../../OptionGroup';
import { IOptionButtonIndicator } from '../OptionButton.types';

const OptionButtonIndicator = forwardRef<HTMLInputElement, IOptionButtonIndicator>(
    ({ className, isChecked: isCheckedByProps, isDisabled, onChange, type, value, ...props }, ref) => {
        const optionGroupContext = useOptionGroup();

        const handleChange = useCallback(() => {
            onChange?.(value);
            optionGroupContext?.onChange?.(value);
        }, [value, onChange, optionGroupContext?.onChange]);

        const inputClassName = cn('mc-option-button__input', className);

        if (optionGroupContext) {
            let isChecked = false;

            if (optionGroupContext.mode === 'single' && value !== undefined) {
                isChecked = optionGroupContext.value === value;
            }

            if (optionGroupContext.mode === 'multi' && value !== undefined) {
                isChecked = (optionGroupContext.values ?? []).includes(value);
            }

            const optionButtonType = optionGroupContext.mode === 'single' ? 'radio' : 'checkbox';

            return (
                <input
                    {...props}
                    ref={ref}
                    className={inputClassName}
                    type={optionButtonType}
                    name={optionGroupContext.name}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={handleChange}
                />
            );
        }

        return (
            <input
                {...props}
                ref={ref}
                className={inputClassName}
                type={type}
                checked={isCheckedByProps}
                disabled={isDisabled}
                onChange={handleChange}
            />
        );
    }
);

OptionButtonIndicator.displayName = 'OptionButtonIndicator';

export default OptionButtonIndicator;
