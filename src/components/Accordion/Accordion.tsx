import React, { FC } from 'react';
import { IAccordionProps } from './Accordion.types';
import { AccordionContainer } from './partials';
import { AccordionContextProvider } from './AccordionContext';
import './Accordion.scss';

const Accordion: FC<IAccordionProps> = ({
    className,
    size = 'm',
    defaultIsOpen = false,
    isDisabled = false,
    children,
    ...props
}) => (
    <AccordionContextProvider size={size} defaultIsOpen={defaultIsOpen} isDisabled={isDisabled}>
        <AccordionContainer className={className} {...props}>
            {children}
        </AccordionContainer>
    </AccordionContextProvider>
);

export default Accordion;
