import { InputHTMLAttributes } from 'react';
import { TOptionGroupValue } from '../OptionGroup/OptionGroup.types';

type TOmittedProps = 'checked' | 'disabled' | 'onClick' | 'type';

const types = ['radio', 'checkbox'] as const;

export type TOptionCardType = typeof types[number];

const indicatorPosition = [
    'top',
    'top-right',
    'right',
    'bottom-right',
    'bottom',
    'bottom-left',
    'left',
    'top-left'
] as const;

export type TOptionCardIndicatorPosition = typeof indicatorPosition[number];

export interface IOptionCardIndicator extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    indicatorPosition?: TOptionCardIndicatorPosition;
    isChecked?: boolean;
    onClick?: (value: TOptionGroupValue | undefined) => void;
    value?: TOptionGroupValue;
    type?: TOptionCardType;
}

export interface IOptionCardContainer {
    className?: string;
}

export interface IOptionCard extends IOptionCardContainer, IOptionCardIndicator {}
