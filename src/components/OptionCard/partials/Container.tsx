import React, { FC } from 'react';
import cn from 'classnames';
import { IOptionCardPartialProps, TOptionPadding } from '../OptionCard.types';

function sanitize(unit: TOptionPadding): string {
    return unit.replace(/^mu/, '');
}

const getCardPaddingModifier = (cardPadding?: TOptionPadding): string => {
    if (cardPadding) {
        return `mu-p-${sanitize(cardPadding)}`;
    }

    return '';
};

const OptionCardContainer: FC<IOptionCardPartialProps> = ({ className, padding, children }) => (
    <label className={cn('mc-option-card', 'mc-option-card--no-padding', getCardPaddingModifier(padding), className)}>
        {children}
    </label>
);

export default OptionCardContainer;
