import React, { FC } from 'react';
import cn from 'classnames';
import { IRadioPartialProps } from '../Radio.types';

const RadioContainer: FC<IRadioPartialProps> = ({ className, children }) => {
    return <label className={cn('mc-radio', className)}>{children}</label>;
};

export default RadioContainer;
