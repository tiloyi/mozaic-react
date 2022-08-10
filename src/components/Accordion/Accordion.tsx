import React, { useState } from 'react';
import cn from 'classnames';
import { IAccordionProps } from './Accordion.types';
import { AccordionContainer, AccordionContent } from './partials';
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

    const wrapperClassName = cn(className, {
        'is-open': isOpen
    });

    return (
        <AccordionContainer className={wrapperClassName} size={size} {...props}>
            <div className="mc-accordion__header">
                <h2 className="mc-accordion__title">
                    <button
                        type="button"
                        id="accordion"
                        className="mc-accordion__trigger"
                        aria-expanded={!isOpen && 'false'}
                        data-mc-component="accordion"
                        onClick={() => setIsOpen(!isOpen)}
                        disabled={isDisabled}
                    >
                        {icon}
                        {title}
                    </button>
                </h2>
            </div>
            <AccordionContent id="content" aria-hidden={isOpen && 'false'} aria-labelledby="accordion">
                {children}
            </AccordionContent>
        </AccordionContainer>
    );
};

export default Accordion;
