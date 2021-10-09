import React from 'react';
import cn from 'classnames';
import { ISelectProps, SelectSize } from './Select.types';
import './Select.scss';

const Select = ({
    className,
    options,
    placeholder = '',
    size = SelectSize.M,
    isValid,
    isInvalid,
    isDisabled,
    ...props
}: ISelectProps): JSX.Element => {
    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    const selectClassName = cn(
        'mc-select',
        className,
        size !== SelectSize.M && `mc-select--${size}`,
        isInvalid && 'is-invalid',
        isValid && 'is-valid'
    );

    return (
        <select className={selectClassName} {...props} aria-invalid={isInvalid} disabled={isDisabled}>
            {placeholder.length > 0 && <option>-- {placeholder} --</option>}
            {options.map(option => (
                <option key={`select-option-${option.value}`} value={option.value} disabled={option.isDisabled}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
