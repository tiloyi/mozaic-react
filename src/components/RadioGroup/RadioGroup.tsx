import React, { FC, createContext, useContext, useMemo } from 'react';
import { IRadioGroupProps } from './RadioGroup.types';

const RadioGroupContext = createContext<IRadioGroupProps | null>(null);

export function useRadioGroup(): IRadioGroupProps | null {
    return useContext(RadioGroupContext);
}

const RadioGroup: FC<IRadioGroupProps> = ({ children, name, value, onChange }) => {
    const contextValue = useMemo(() => ({ name, value, onChange }), [name, value, onChange]);

    return <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>;
};

export default RadioGroup;
