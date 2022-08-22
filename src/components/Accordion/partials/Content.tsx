import React, { FC } from 'react';
import cn from 'classnames';
import { IAccordionContentProps } from '../Accordion.types';
import { useAccordionContext } from '../AccordionContext';

const AccordionContent: FC<IAccordionContentProps> = ({ className, children, ...props }) => {
    const { isOpen } = useAccordionContext();

    return (
        <article {...props} className={cn('mc-accordion__content', className)} aria-hidden={!isOpen}>
            {children}
        </article>
    );
};

export default AccordionContent;
