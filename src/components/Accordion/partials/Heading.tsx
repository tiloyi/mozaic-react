import React, { FC } from 'react';
import cn from 'classnames';
import { IAccordionHeadingProps } from '../Accordion.types';

const AccordionHeading: FC<IAccordionHeadingProps> = ({ className, children, ...props }) => (
    <h2 {...props} className={cn('mc-accordion__title', className)}>
        {children}
    </h2>
);

export default AccordionHeading;
