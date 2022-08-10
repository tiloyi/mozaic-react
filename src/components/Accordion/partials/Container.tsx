import React, { FC } from 'react';
import cn from 'classnames';
import { IAccordionContainer, TAccordionSize } from '../Accordion.types';

export function getSizeModifier(size: TAccordionSize): string {
    return `mc-accordion--${size}`;
}

const AccordionContainer: FC<IAccordionContainer> = ({ className, children, size = 'm', ...props }) => (
    <div className={cn('mc-accordion', getSizeModifier(size), className)} {...props}>
        {children}
    </div>
);

export default AccordionContainer;
