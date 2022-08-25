import { HTMLAttributes, ReactElement } from 'react';

export interface IListBoxContainerProps extends HTMLAttributes<HTMLUListElement> {
    leftOpening?: boolean;
}

export interface IListBoxProps extends IListBoxContainerProps {
    defaultSelected?: TListBoxItemId | TListBoxItemId[];
    leftOpening?: boolean;
    withMultiSelection?: boolean;
    isOpened: boolean;
}

export interface IListBoxContextProps extends IUseListBoxStateMethods {
    withMultiSelection?: boolean;
    isOpened: boolean;
}

export interface IListBoxContextProviderProps {
    defaultSelected?: TListBoxItemId | TListBoxItemId[];
    withMultiSelection?: boolean;
    isOpened: boolean;
}

export type TListBoxItemId = string;

export interface IListBoxItemProps extends HTMLAttributes<HTMLLIElement> {
    id: TListBoxItemId;
    icon?: ReactElement;
    isDisabled?: boolean;
}

export interface IUseListBoxStateMethods {
    check: (id: TListBoxItemId) => void;
    isItemChecked: (id: TListBoxItemId) => boolean;
}
