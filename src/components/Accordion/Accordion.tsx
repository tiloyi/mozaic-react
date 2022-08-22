import React, { useState } from 'react';
import cn from 'classnames';
import { IAccordionProps } from './Accordion.types';
import { AccordionContainer, AccordionContent, AccordionTrigger } from './partials';
import './Accordion.scss';

const Accordion: React.FC<IAccordionProps> = ({
    className,
    size = 'm',
    title,
    isDefaultOpen = false,
    isDisabled = false,
    icon,
    children,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    return (
        <AccordionContainer className={className} size={size} isOpen={isOpen} {...props}>
            <AccordionTrigger onClick={() => setIsOpen(!isOpen)}>
                {icon}
                {title}
            </AccordionTrigger>
            <AccordionContent id="content" aria-hidden={isOpen && 'false'} aria-labelledby="accordion">
                {children}
            </AccordionContent>
        </AccordionContainer>
    );
};

export default Accordion;
