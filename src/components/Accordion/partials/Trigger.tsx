import React, { FC } from 'react';
import cn from 'classnames';
import View from '../../View';
import { IAccordionTrigger } from '../Accordion.types';

const AccordionTrigger: FC<IAccordionTrigger> = ({ className, children, ...props }) => (
    <>
        <View as="button" className={cn(className)} {...props}>
            {children}
        </View>
        {/*<div>*/}
        {/*    <h2 className="mc-accordion__title">*/}
        {/*        <button*/}
        {/*            type="button"*/}
        {/*            id="accordion"*/}
        {/*            className="mc-accordion__trigger"*/}
        {/*            aria-expanded={!isOpen && 'false'}*/}
        {/*            data-mc-component="accordion"*/}
        {/*            onClick={() => setIsOpen(!isOpen)}*/}
        {/*            disabled={isDisabled}*/}
        {/*        >*/}
        {/*            {icon}*/}
        {/*            {title}*/}
        {/*        </button>*/}
        {/*    </h2>*/}
        {/*</div>*/}
    </>
);

export default AccordionTrigger;
