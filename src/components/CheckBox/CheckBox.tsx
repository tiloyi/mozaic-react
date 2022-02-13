import React, { forwardRef } from 'react';
import { CheckBoxContainer, CheckBoxIndicator, CheckBoxLabel } from './partials';
import { ICheckBoxProps } from './CheckBox.types';
import './CheckBox.scss';

const CheckBox = forwardRef<HTMLInputElement, ICheckBoxProps>(({ className, children, ...props }, ref) => (
    <CheckBoxContainer className={className}>
        <CheckBoxIndicator {...props} ref={ref} />
        <CheckBoxLabel>{children}</CheckBoxLabel>
    </CheckBoxContainer>
));

CheckBox.displayName = 'MozaicCheckBox';

export default CheckBox;
