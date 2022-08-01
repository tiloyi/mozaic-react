import React, { forwardRef, useEffect, useRef } from 'react';
import cn from 'classnames';
import mergeRefs from 'react-merge-refs';
import { ICheckBoxProps } from '../CheckBox.types';

const CheckBoxIndicator = forwardRef<HTMLInputElement, ICheckBoxProps>(
    ({ className, isChecked, isDisabled, isInvalid, isIndeterminate, ...props }, forwardedRef) => {
        const ref = useRef<HTMLInputElement>(null);

        const inputClassName = cn('mc-checkbox__input', isInvalid && 'is-invalid', className);

        useEffect(() => {
            if (ref.current) {
                ref.current.indeterminate = Boolean(isIndeterminate);
            }
        }, [isIndeterminate]);

        return (
            <input
                ref={mergeRefs([forwardedRef, ref])}
                className={inputClassName}
                {...props}
                type="checkbox"
                checked={isChecked}
                disabled={isDisabled}
            />
        );
    }
);

CheckBoxIndicator.displayName = 'CheckBoxIndicator';

export default CheckBoxIndicator;
