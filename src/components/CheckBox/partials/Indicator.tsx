import React from 'react';
import cn from 'classnames';
import { ICheckBoxProps } from '../CheckBox.types';

const CheckBoxIndicator = ({ className, isChecked, isDisabled, isInvalid, ...props }: ICheckBoxProps) => {
    const inputClassName = cn('mc-checkbox__input', isInvalid && 'is-invalid', className);

    return <input className={inputClassName} {...props} type="checkbox" checked={isChecked} disabled={isDisabled} />;
};

export default CheckBoxIndicator;
