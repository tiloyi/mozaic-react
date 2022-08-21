import React, { FC, createContext, useContext, useMemo } from 'react';
import { IAccordionContextProps, IAccordionContextProviderProps } from './Accordion.types';
import useAccordionState from './useAccordionState';

const AccordionContext = createContext<IAccordionContextProps>({} as IAccordionContextProps);

export function useAccordionContext(): IAccordionContextProps {
    return useContext(AccordionContext);
}

export const AccordionContextProvider: FC<IAccordionContextProviderProps> = ({
    children,
    defaultIsOpen = false,
    size,
    isDisabled = false
}) => {
    const [isOpen, { open, toggle, close }] = useAccordionState(defaultIsOpen);

    const contextValue = useMemo(
        () => ({ size, isOpen, isDisabled, open, toggle, close }),
        [size, isOpen, isDisabled, open, toggle, close]
    );

    return <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>;
};
