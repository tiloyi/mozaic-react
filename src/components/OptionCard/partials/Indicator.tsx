import React, { forwardRef, useCallback } from 'react';
import cn from 'classnames';
import { useOptionGroup } from '../../OptionGroup';
import { IOptionCardIndicator } from '../OptionCard.types';

const getIndicatorPosition = (indicatorPosition?: string): string => {
    if (indicatorPosition) {
        return `mc-option-card__indicator--${indicatorPosition}`;
    }
    return '';
};

const OptionCardIndicator = forwardRef<HTMLInputElement, IOptionCardIndicator>(
    ({ className, indicatorPosition, isChecked: isCheckedByProps, name, onClick, type, value, ...props }, ref) => {
        const optionGroupContext = useOptionGroup();

        const handleClick = useCallback(() => {
            optionGroupContext?.onClick?.(value);
            onClick?.(value);
        }, [optionGroupContext?.onClick, value]);

        if (optionGroupContext) {
            let isChecked = false;

            if (optionGroupContext.mode === 'single' && value !== undefined) {
                isChecked = optionGroupContext.value === value;
            }

            if (optionGroupContext.mode === 'multi' && value !== undefined) {
                isChecked = (optionGroupContext.values ?? []).includes(value);
            }

            const optionCardType = optionGroupContext.mode === 'single' ? 'radio' : 'checkbox';
            const inputClassName = cn(
                optionCardType === 'radio' ? 'mc-radio__input' : 'mc-checkbox__input',
                'mc-option-card__input',
                getIndicatorPosition(indicatorPosition),
                className
            );

            return (
                <input
                    checked={isChecked}
                    className={inputClassName}
                    name={optionGroupContext.name}
                    onClick={handleClick}
                    ref={ref}
                    type={optionCardType}
                    {...props}
                />
            );
        }

        const inputClassName = cn(
            type === 'radio' ? 'mc-radio__input' : 'mc-checkbox__input',
            'mc-option-card__input',
            getIndicatorPosition(indicatorPosition),
            className
        );

        return (
            <input
                checked={isCheckedByProps}
                className={inputClassName}
                name={name}
                onClick={handleClick}
                ref={ref}
                type={type}
                {...props}
            />
        );
    }
);

OptionCardIndicator.displayName = 'OptionCardIndicator';

export default OptionCardIndicator;