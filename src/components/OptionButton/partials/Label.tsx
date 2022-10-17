import React, { FC } from 'react';
import cn from 'classnames';
import { IOptionButtonPartialProps } from '../OptionButton.types';

const OptionButtonLabel: FC<IOptionButtonPartialProps> = ({ className, children }) => (
    <div className={cn('mc-option-button__label', className)}>{children}</div>
);

export default OptionButtonLabel;
