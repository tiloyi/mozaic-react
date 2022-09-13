import { HTMLAttributes, LiHTMLAttributes, ReactElement } from 'react';

const modes = ['none', 'single', 'multi'] as const;

export type TListBoxMode = typeof modes[number];

export type TListBoxValue = string;

export interface IListBoxContainerProps extends Omit<HTMLAttributes<HTMLUListElement>, 'role' | 'onClick'> {}

export interface IListBoxItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'role' | 'onClick'> {
    icon?: ReactElement;
    value?: TListBoxValue;
    isDisabled?: boolean;
}

export interface IListBoxContextValue {
    value?: TListBoxValue;
    values?: Array<TListBoxValue>;
    mode?: TListBoxMode;
    onClick?: (value?: TListBoxValue) => void;
}

export interface IListBoxProps extends IListBoxContainerProps, IListBoxContextValue {}
