import React, { forwardRef } from 'react';
import { OptionCardContainer, OptionCardIndicator, OptionCardLabel } from './partials';
import { IOptionCard } from './OptionCard.types';
import './OptionCard.scss';

const OptionCard = forwardRef<HTMLInputElement, IOptionCard>(
    ({ className, indicatorPosition = 'top-right', type = 'radio', padding, children, ...props }, ref) => (
        <OptionCardContainer className={className} padding={padding}>
            <OptionCardIndicator
                {...props}
                ref={ref}
                type={type}
                padding={padding}
                indicatorPosition={indicatorPosition}
            />
            <OptionCardLabel>{children}</OptionCardLabel>
        </OptionCardContainer>
    )
);

OptionCard.displayName = 'OptionCard';

export default OptionCard;
