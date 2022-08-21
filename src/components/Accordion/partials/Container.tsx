import React, { FC } from 'react';
import cn from 'classnames';
import { IAccordionContainerProps, TAccordionSize } from '../Accordion.types';
import { useAccordionContext } from '../AccordionContext';

export function getSizeModifier(size: TAccordionSize): string {
    return `mc-accordion--${size}`;
}

const AccordionContainer: FC<IAccordionContainerProps> = ({ className, children, ...props }) => {
    const { size, isOpen, isDisabled } = useAccordionContext();

    return (
        <section
            className={cn('mc-accordion', getSizeModifier(size), className, {
                'is-open': isOpen,
                'is-disabled': isDisabled
            })}
            {...props}
        >
            {children}
        </section>
    );
};

export default AccordionContainer;
