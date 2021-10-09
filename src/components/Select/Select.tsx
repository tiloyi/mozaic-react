import React from 'react';
import cn from 'classnames';
import { ISelectOption, ISelectOptionGroup, ISelectProps, SelectSize } from './Select.types';
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
            {options.map(option => {
                if ((option as ISelectOptionGroup).options) {
                    return (
                        <optgroup label={option.label} disabled={option.isDisabled}>
                            {(option as ISelectOptionGroup).options.map(nestedOption => (
                                <option
                                    key={`select-option-${nestedOption.value}`}
                                    value={nestedOption.value}
                                    disabled={nestedOption.isDisabled}
                                >
                                    {nestedOption.label}
                                </option>
                            ))}
                        </optgroup>
                    );
                }

                return (
                    <option
                        key={`select-option-${(option as ISelectOption).value}`}
                        value={(option as ISelectOption).value}
                        disabled={option.isDisabled}
                    >
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;
