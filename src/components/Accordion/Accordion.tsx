import React, { useState } from 'react';
import cn from 'classnames';
import { IAccordionProps } from './Accordion.types';
import './Accordion.scss';

const blockClassName = 'mc-accordion';

const Accordion: React.FC<IAccordionProps> = ({ className = '', size = 'm', title, isDefaultOpen = false, isDisabled = false, icon, children }) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);
    const wrapperClassName = cn(`${blockClassName}`, `${blockClassName}--${size}`, className, {
        'is-open': isOpen
    });

    return (
        <div className={wrapperClassName} data-testid='accordion-wrapper'>
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
                        data-testid='accordion-button'
                    >
                        {icon}
                        {title}
                    </button>
                </h2>
            </div>
            <div
                id="content"
                className="mc-accordion__content"
                aria-hidden={isOpen && 'false'}
                aria-labelledby="accordion"
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;
