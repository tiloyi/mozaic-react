import React, { forwardRef } from 'react';
import { OptionButtonContainer, OptionButtonIndicator, OptionButtonLabel } from './partials';
import { IOptionButtonProps } from './OptionButton.types';
import './OptionButton.scss';

const OptionButton = forwardRef<HTMLInputElement, IOptionButtonProps>(
    ({ className, children, width = 'fit', ...props }, ref) => (
        <OptionButtonContainer className={className} width={width}>
            <OptionButtonIndicator {...props} ref={ref} />
            <OptionButtonLabel>{children}</OptionButtonLabel>
        </OptionButtonContainer>
    )
);

OptionButton.displayName = 'OptionButton';

export default OptionButton;
