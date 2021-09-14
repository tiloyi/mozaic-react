import React, { FC } from 'react';
import CheckBoxContainer from './partials/Container';
import CheckBoxIndicator from './partials/Indicator';
import CheckBoxLabel from './partials/Label';
import { ICheckBoxProps } from './CheckBox.types';
import './CheckBox.scss';

const CheckBox: FC<ICheckBoxProps> = ({ className, children, ...props }) => (
    <CheckBoxContainer className={className}>
        <CheckBoxIndicator {...props} />
        <CheckBoxLabel>{children}</CheckBoxLabel>
    </CheckBoxContainer>
);

export default CheckBox;
