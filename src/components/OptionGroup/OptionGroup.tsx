import React, { FC, createContext, useContext, useMemo } from 'react';
import { IOptionGroupProps } from './OptionGroup.types';

const OptionGroupContext = createContext<IOptionGroupProps | null>(null);

export function useOptionGroup(): IOptionGroupProps | null {
    return useContext(OptionGroupContext);
}

const OptionGroup: FC<IOptionGroupProps> = ({ children, mode = 'single', name, onChange, value, values }) => {
    const contextValue = useMemo(
        () => ({ mode, name, onChange, value, values }),
        [mode, name, onChange, value, values]
    );

    return <OptionGroupContext.Provider value={contextValue}>{children}</OptionGroupContext.Provider>;
};

export default OptionGroup;
