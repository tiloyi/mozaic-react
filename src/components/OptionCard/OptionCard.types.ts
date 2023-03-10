import { InputHTMLAttributes } from 'react';
import { TOptionGroupValue } from '../OptionGroup';

type TOmittedProps = 'checked' | 'disabled' | 'onChange' | 'type';

const types = ['radio', 'checkbox'] as const;

export type TOptionCardType = typeof types[number];

const paddings = ['mu050', 'mu100'] as const;

export type TOptionPadding = typeof paddings[number];

const indicatorPositions = [
    'top',
    'top-right',
    'right',
    'bottom-right',
    'bottom',
    'bottom-left',
    'left',
    'top-left'
] as const;

export type TOptionCardIndicatorPosition = typeof indicatorPositions[number];

export interface IOptionCardIndicator extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    indicatorPosition?: TOptionCardIndicatorPosition;
    padding?: TOptionPadding;
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (value: TOptionGroupValue | undefined) => void;
    value?: TOptionGroupValue;
    type?: TOptionCardType;
}

export interface IOptionCardPartialProps {
    padding?: TOptionPadding;
    className?: string;
}

export interface IOptionCardProps extends IOptionCardPartialProps, IOptionCardIndicator {}
