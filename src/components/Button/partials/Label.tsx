import React, { FC } from 'react';
import cn from 'classnames';
import { IButtonPartialProps } from '../Button.types';

const ButtonLabel: FC<IButtonPartialProps> = ({ className, children }) => (
    <span className={cn('mc-button__label', className)}>{children}</span>
);

export default ButtonLabel;
