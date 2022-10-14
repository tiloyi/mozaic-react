import { InputHTMLAttributes } from 'react';
import { TOptionGroupValue } from '../OptionGroup/OptionGroup.types';

type TOmittedProps = 'checked' | 'disabled' | 'onClick' | 'type';

const types = ['radio', 'checkbox'] as const;

export type TOptionCardType = typeof types[number];

export interface IOptionCardIndicator extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    onClick?: (value: TOptionGroupValue | undefined) => void;
    value?: TOptionGroupValue;
    type?: TOptionCardType;
}

const positionLabels = ['top', 'center'] as const;

export type TOptionCardPositionLabel = typeof positionLabels[number];

export interface IOptionCardPartialProps extends IOptionCardIndicator{
    className?: string;
    positionLabel?: TOptionCardPositionLabel;
}
