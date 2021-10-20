import React, { FC } from 'react';
import cn from 'classnames';
import { IIncrementButtonProps } from '../../QuantitySelector.types';

const DefaultIcon = () => (
    <svg className="mc-button__icon" fill="currentColor" viewBox="0 0 24 24" width="28">
        <path d="M19.09 11h-6V5a1 1 0 00-2 0v6h-6a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z"></path>
    </svg>
);

const IncrementButton: FC<IIncrementButtonProps> = ({ className, content, size, isDisabled, ...restProps }) => {
    return (
        <button
            className={cn(
                'mc-button mc-button--square mc-button--bordered mc-quantity-selector__button-right',
                `mc-button--${size}`,
                isDisabled && 'is-disabled',
                className
            )}
            aria-label={restProps['aria-label'] || 'Increment'}
            aria-controls={restProps['aria-controls'] || 'qty-selector'}
            {...restProps}
        >
            {content || <DefaultIcon />}
        </button>
    );
};

export default IncrementButton;
