import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import { RadioContextProvider } from './Context';

export interface IRadioContainerProps {
    className?: string;
    name?: string;
    value: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioContainer: FC<IRadioContainerProps> = ({
    className,
    children,
    name,
    value,
    isChecked = false,
    isDisabled = false,
    onChange
}) => {
    return (
        <RadioContextProvider isChecked={isChecked}>
            <div className={cn(className)}>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={onChange}
                />
                {children}
            </div>
        </RadioContextProvider>
    );
};

export default RadioContainer;
