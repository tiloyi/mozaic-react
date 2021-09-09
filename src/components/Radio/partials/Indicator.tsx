import React from 'react';
import cn from 'classnames';
import { useRadioGroup } from '../../RadioGroup';
import { IRadioProps } from '../Radio.types';

const RadioIndicator = ({ className, isChecked, isDisabled, isInvalid, ...props }: IRadioProps) => {
    const radioGroupContext = useRadioGroup();

    const inputClassName = cn('mc-radio__input', isInvalid && 'is-invalid', className);

    if (radioGroupContext) {
        return (
            <input
                className={inputClassName}
                {...props}
                type="radio"
                name={radioGroupContext.name}
                checked={props.value === radioGroupContext.value}
                disabled={isDisabled}
            />
        );
    }

    return <input className={inputClassName} {...props} type="radio" checked={isChecked} disabled={isDisabled} />;
};

export default RadioIndicator;
