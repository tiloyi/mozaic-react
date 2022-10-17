import React, { FC } from 'react';
import cn from 'classnames';
import { IOptionCardPartialProps } from '../OptionCard.types';

const OptionCardLabel: FC<IOptionCardPartialProps> = ({ className, children }) => (
    <>
        <div className="mc-option-card__label" />
        <div className={cn('mc-option-card__content', className)}>{children}</div>
    </>
);

export default OptionCardLabel;
