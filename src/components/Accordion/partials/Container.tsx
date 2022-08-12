import React, { FC } from 'react';
import cn from 'classnames';
import { IAccordionContainer, TAccordionSize } from '../Accordion.types';

export function getSizeModifier(size: TAccordionSize): string {
    return `mc-accordion--${size}`;
}

const AccordionContainer: FC<IAccordionContainer> = ({ className, children, size = 'm', isOpen, ...props }) => (
    <section className={cn('mc-accordion', getSizeModifier(size), className, { 'is-open': isOpen })} {...props}>
        {children}
    </section>
);

export default AccordionContainer;
