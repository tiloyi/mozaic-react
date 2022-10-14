import React, { FC } from 'react';
import cn from 'classnames';
import { IOptionCardContainer } from '../OptionCard.types';

const OptionCardContainer: FC<IOptionCardContainer> = ({ className, children }) => (
    <label
        className={cn(
            'mc-option-card',
            'mc-option-card--no-padding',
            className
        )}
    >
        {children}
    </label>
);

export default OptionCardContainer;
