import React, { FC, createContext, useContext } from 'react';
import { IRadioGroupProps } from './RadioGroup.types';

const RadioGroupContext = createContext<IRadioGroupProps>({} as IRadioGroupProps);

export function useRadioGroup(): IRadioGroupProps {
    return useContext(RadioGroupContext);
}

const RadioGroup: FC<IRadioGroupProps> = ({ children, name, value, onChange }) => {
    const contextValue = { name, value, onChange };

    return <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>;
};

export default RadioGroup;
