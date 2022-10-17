import React, { forwardRef } from 'react';
import { OptionCardContainer, OptionCardIndicator } from './partials';
import { IOptionCard } from './OptionCard.types';
import './OptionCard.scss';

const OptionCard = forwardRef<HTMLInputElement, IOptionCard>(
    ({ className, indicatorPosition = 'top-right', type = 'radio', children, ...props }, ref) => (
        <OptionCardContainer className={className}>
            <OptionCardIndicator {...props} ref={ref} type={type} indicatorPosition={indicatorPosition}/>
            <div className="mc-option-card__label" />
            <div className="mc-option-card__content">{children}</div>
        </OptionCardContainer>
    )
);

OptionCard.displayName = 'OptionCard';

export default OptionCard;
