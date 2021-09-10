import React, { FC } from 'react';
import cn from 'classnames';
import { ICheckBoxPartialProps } from '../CheckBox.types';

const CheckBoxLabel: FC<ICheckBoxPartialProps> = ({ className, children }) => (
    <div className={cn('mc-checkbox__label', className)}>{children}</div>
);

export default CheckBoxLabel;
