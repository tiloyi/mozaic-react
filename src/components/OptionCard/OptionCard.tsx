import React, { forwardRef } from 'react';
import { OptionCardContainer, OptionCardIndicator } from './partials';
import { IOptionCardPartialProps } from './OptionCard.types';
import './OptionCard.scss';

const OptionCard = forwardRef<HTMLInputElement, IOptionCardPartialProps>(({ className, positionLabel = 'top', type= 'radio', children, ...props }, ref) => (
    <OptionCardContainer className={className} positionLabel={positionLabel}>
        <OptionCardIndicator {...props} ref={ref} type={type} />
        <div className="mc-option-card__label" />
        <div className="mc-option-card__content">{children}</div>
    </OptionCardContainer>
));

OptionCard.displayName = 'OptionCard';

export default OptionCard;
