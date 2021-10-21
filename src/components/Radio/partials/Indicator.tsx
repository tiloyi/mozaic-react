import React, { ChangeEvent, useCallback } from 'react';
import cn from 'classnames';
import { useRadioGroup } from '../../RadioGroup';
import { IRadioProps } from '../Radio.types';

const RadioIndicator = ({
    className,
    isChecked,
    isDisabled,
    isInvalid,
    onChange,
    ...props
}: IRadioProps): JSX.Element => {
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
            type="radio"
            checked={isChecked}
            disabled={isDisabled}
            onChange={handleChange}
        />
    );
};

export default RadioIndicator;
