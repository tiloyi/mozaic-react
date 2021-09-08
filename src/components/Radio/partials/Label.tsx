import React, { FC } from 'react';
import cn from 'classnames';
import { IRadioPartialProps } from '../Radio.types';

const RadioLabel: FC<IRadioPartialProps> = ({ className, children }) => (
    <div className={cn('mc-radio__label', className)}>{children}</div>
);

export default RadioLabel;
