import React, { FC } from 'react';
import cn from 'classnames';
import { IAccordionContent } from '../Accordion.types';

const AccordionContent: FC<IAccordionContent> = ({ className, children, ...props }) => (
    <div className={cn('mc-accordion__content', className)} {...props}>
        {children}
    </div>
);

export default AccordionContent;
