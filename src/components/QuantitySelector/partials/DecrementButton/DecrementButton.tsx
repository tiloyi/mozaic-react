import React, { FC } from 'react';
import cn from 'classnames';
import { IDecrementButtonProps } from '../../QuantitySelector.types';

const DefaultIcon = () => (
    <svg className="mc-button__icon" fill="currentColor" viewBox="0 0 24 24" width="28">
        <path d="M17.09 13h-10a1 1 0 010-2h10a1 1 0 010 2z"></path>
    </svg>
);

const DecrementButton: FC<IDecrementButtonProps> = ({ className, content, size, isDisabled, ...restProps }) => {
    return (
        <button
            className={cn(
                'mc-button mc-button--square mc-button--bordered mc-quantity-selector__button-left',
                `mc-button--${size}`,
                isDisabled && 'is-disabled',
                className
            )}
            aria-label={restProps['aria-label'] || 'decrement-button'}
            aria-controls={restProps['aria-controls'] || 'qty-selector'}
            {...restProps}
        >
            {content || <DefaultIcon />}
        </button>
    );
};

export default DecrementButton;
