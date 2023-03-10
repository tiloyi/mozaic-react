import React, { forwardRef, useCallback } from 'react';
import cn from 'classnames';
import { useOptionGroup } from '../../OptionGroup';
import { IOptionCardIndicator } from '../OptionCard.types';

const getIndicatorPositionModifier = (indicatorPosition?: string, padding?: string): string => {
    if (indicatorPosition && padding) {
        return `mc-option-card__indicator--${indicatorPosition}--${padding}`;
    }

    if (indicatorPosition) {
        return `mc-option-card__indicator--${indicatorPosition}`;
    }

    return '';
};

const OptionCardIndicator = forwardRef<HTMLInputElement, IOptionCardIndicator>(
    (
        {
            className,
            indicatorPosition,
            padding,
            isChecked: isCheckedByProps,
            isDisabled,
            name,
            onChange,
            type,
            value,
            ...props
        },
        ref
    ) => {
        const optionGroupContext = useOptionGroup();

        const handleChange = useCallback(() => {
            optionGroupContext?.onChange?.(value);
            onChange?.(value);
        }, [value, onChange, optionGroupContext?.onChange]);

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
                getIndicatorPositionModifier(indicatorPosition, padding),
                className
            );

            return (
                <input
                    {...props}
                    ref={ref}
                    className={inputClassName}
                    name={optionGroupContext.name}
                    type={optionCardType}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={handleChange}
                />
            );
        }

        const inputClassName = cn(
            type === 'radio' ? 'mc-radio__input' : 'mc-checkbox__input',
            'mc-option-card__input',
            getIndicatorPositionModifier(indicatorPosition, padding),
            className
        );

        return (
            <input
                {...props}
                ref={ref}
                className={inputClassName}
                name={name}
                type={type}
                checked={isCheckedByProps}
                disabled={isDisabled}
                onChange={handleChange}
            />
        );
    }
);

OptionCardIndicator.displayName = 'OptionCardIndicator';

export default OptionCardIndicator;
