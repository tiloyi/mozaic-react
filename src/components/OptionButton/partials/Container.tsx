import React, { FC } from 'react';
import cn from 'classnames';
import { IOptionButtonPartialProps } from '../OptionButton.types';

const OptionButtonContainer: FC<IOptionButtonPartialProps> = ({ className, children, width }) => (
    <label className={cn('mc-option-button', width === 'full' && 'mc-option-button--full', className)}>
        {children}
    </label>
);

export default OptionButtonContainer;
