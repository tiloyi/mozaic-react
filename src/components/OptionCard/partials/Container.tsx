import React, { FC } from 'react';
import cn from 'classnames';
import { IOptionCardPartialProps } from '../OptionCard.types';

const OptionCardContainer: FC<IOptionCardPartialProps> = ({ className, positionLabel = 'top', children }) => (
    <label
        className={cn(
            'mc-option-card',
            'mc-option-card--no-padding',
            positionLabel === 'center' && 'mc-option-card--centered',
            className
        )}
    >
        {children}
    </label>
);

export default OptionCardContainer;
