import React, { FC, createContext, useContext, useMemo } from 'react';
import { IAccordionContextProps } from './Accordion.types';

const AccordionContext = createContext<IAccordionContextProps>({} as IAccordionContextProps);

export function useAccordionContext(): IAccordionContextProps {
    return useContext(AccordionContext);
}

const AccordionContextProvider: FC<IAccordionContextProps> = ({ children, isOpen, open, toggle, close }) => {
    const contextValue = useMemo(() => ({ isOpen, open, toggle, close }), [isOpen, open, toggle, close]);

    return <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>;
};

export default AccordionContextProvider;
