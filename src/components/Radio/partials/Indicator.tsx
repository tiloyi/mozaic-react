import React, { ChangeEvent, forwardRef, useCallback } from 'react';
import cn from 'classnames';
import { useRadioGroup } from '../../RadioGroup';
import { IRadioProps } from '../Radio.types';

const RadioIndicator = forwardRef<HTMLInputElement, IRadioProps>(
    ({ className, isChecked, isDisabled, isInvalid, onChange, ...props }, ref) => {
        const radioGroupContext = useRadioGroup();

        const inputClassName = cn('mc-radio__input', isInvalid && 'is-invalid', className);

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                onChange?.(event);
                radioGroupContext?.onChange?.(event);
            },
            [onChange, radioGroupContext]
        );

        if (radioGroupContext) {
            return (
                <input
                    className={inputClassName}
                    {...props}
                    ref={ref}
                    type="radio"
                    name={radioGroupContext.name}
                    checked={props.value === radioGroupContext.value}
                    disabled={isDisabled}
                    onChange={handleChange}
                />
            );
        }

        return (
            <input
                className={inputClassName}
                {...props}
                ref={ref}
                type="radio"
                checked={isChecked}
                disabled={isDisabled}
                onChange={handleChange}
            />
        );
    }
);

RadioIndicator.displayName = 'MozaicRadioIndicator';

export default RadioIndicator;
