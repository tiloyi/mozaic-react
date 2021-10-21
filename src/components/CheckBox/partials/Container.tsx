import React, { FC } from 'react';
import cn from 'classnames';
import { ICheckBoxPartialProps } from '../CheckBox.types';

const CheckBoxContainer: FC<ICheckBoxPartialProps> = ({ className, children }) => (
    <label className={cn('mc-checkbox', className)}>{children}</label>
);

export default CheckBoxContainer;
