import React, { FC } from 'react';
import { CheckBoxContainer, CheckBoxIndicator, CheckBoxLabel } from './partials';
import { ICheckBoxProps } from './CheckBox.types';
import './CheckBox.scss';

const CheckBox: FC<ICheckBoxProps> = ({ className, children, ...props }) => (
    <CheckBoxContainer className={className}>
        <CheckBoxIndicator {...props} />
        <CheckBoxLabel>{children}</CheckBoxLabel>
    </CheckBoxContainer>
);

export default CheckBox;
