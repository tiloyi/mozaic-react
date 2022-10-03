import { InputHTMLAttributes } from 'react';
import { TOptionGroupValue } from '../OptionGroup/OptionGroup.types';

type TOmittedProps = 'checked' | 'disabled' | 'onClick' | 'type';

export const typeOptionCard = ['radio', 'checkbox'] as const;

export type TTypeOptionCard = typeof typeOptionCard[number];

export interface IOptionCardIndicator extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    onClick?: (value: TOptionGroupValue | undefined) => void;
    value?: TOptionGroupValue;
    type?: TTypeOptionCard;
}

export const positionLabel = ['top', 'center'] as const;

export type TCardPositionLabel = typeof positionLabel[number];

export interface IOptionCardPartialProps extends IOptionCardIndicator{
    className?: string;
    positionLabel?: TCardPositionLabel;
}
