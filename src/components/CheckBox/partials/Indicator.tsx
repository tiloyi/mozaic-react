import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { ICheckBoxProps } from '../CheckBox.types';

const CheckBoxIndicator = ({
    className,
    isChecked,
    isDisabled,
    isInvalid,
    isIndeterminate,
    ...props
}: ICheckBoxProps) => {
    const input = useRef<HTMLInputElement>(null);

    const inputClassName = cn('mc-checkbox__input', isInvalid && 'is-invalid', className);

    useEffect(() => {
        if (input.current) {
            input.current.indeterminate = Boolean(isIndeterminate);
        }
    }, [isIndeterminate]);

    return (
        <input
            ref={input}
            className={inputClassName}
            {...props}
            type="checkbox"
            checked={isChecked}
            disabled={isDisabled}
        />
    );
};

export default CheckBoxIndicator;
