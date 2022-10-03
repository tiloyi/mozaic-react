import React, { FC, createContext, useContext, useMemo } from 'react';
import { IOptionGroupProps } from './OptionGroup.types';

const OptionGroupContext = createContext<IOptionGroupProps | null>(null);

export function useOptionGroup(): IOptionGroupProps | null {
    return useContext(OptionGroupContext);
}

const OptionGroup: FC<IOptionGroupProps> = ({ children, mode = 'single', name, onClick, value, values }) => {
    const contextValue = useMemo(() => ({ mode, name, onClick, value, values }), [mode, name, onClick, value, values]);

    return <OptionGroupContext.Provider value={contextValue}>{children}</OptionGroupContext.Provider>;
};

export default OptionGroup;
