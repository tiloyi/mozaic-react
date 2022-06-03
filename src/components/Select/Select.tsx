import React, { useRef } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import { ISelectOption, ISelectOptionGroup, ISelectProps } from './Select.types';
import './Select.scss';

const Select = ({
    className,
    options,
    placeholder = '',
    size = 'm',
    name,
    isValid,
    isInvalid,
    isDisabled,
    ...props
}: ISelectProps): JSX.Element => {
    const nameRef = useRef(name ?? nanoid());

    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    const selectClassName = cn(
        'mc-select',
        className,
        size !== 'm' && `mc-select--${size}`,
        isInvalid && 'is-invalid',
        isValid && 'is-valid'
    );

    /* eslint-disable react/no-array-index-key */
    return (
        <select className={selectClassName} name={name} {...props} aria-invalid={isInvalid} disabled={isDisabled}>
            {placeholder.length > 0 && <option>-- {placeholder} --</option>}
            {options.map((option, index) => {
                if ((option as ISelectOptionGroup).options) {
                    return (
                        <optgroup
                            key={`select-${nameRef.current}-group-${index}`}
                            label={option.label}
                            disabled={option.isDisabled}
                        >
                            {(option as ISelectOptionGroup).options.map((nestedOption, nestedIndex) => (
                                <option
                                    key={`select-${nameRef.current}-group-${index}-option-${nestedIndex}`}
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
                        key={`select-${nameRef.current}-option-${index}`}
                        value={(option as ISelectOption).value}
                        disabled={option.isDisabled}
                    >
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
    /* eslint-enable react/no-array-index-key */
};

export default Select;
