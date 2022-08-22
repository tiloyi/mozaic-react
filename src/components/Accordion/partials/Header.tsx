import React, { FC } from 'react';
import cn from 'classnames';
import { useAccordionContext } from '../AccordionContext';
import { IAccordionHeaderProps } from '../Accordion.types';

const AccordionHeader: FC<IAccordionHeaderProps> = ({ className, children, ...props }) => {
    const { isOpen, isDisabled, toggle } = useAccordionContext();

    return (
        <div className="mc-accordion__header" {...props}>
            <button
                type="button"
                className={cn('mc-accordion__trigger', className)}
                aria-expanded={isOpen}
                disabled={isDisabled}
                onClick={toggle}
            >
                {children}
            </button>
        </div>
    );
};

export default AccordionHeader;
