import { HTMLAttributes, ReactElement } from 'react';

export interface IListBoxContainerProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onChange'> {
    leftOpening?: boolean;
}

export interface IListBoxProps extends IListBoxContainerProps {
    selected?: TListBoxItemId | TListBoxItemId[];
    leftOpening?: boolean;
    withMultiSelection?: boolean;
    isOpened: boolean;
    onChange?: TListBoxOnChange;
}

export interface IListBoxContextProps extends IUseListBoxStateMethods {
    withMultiSelection?: boolean;
    isOpened: boolean;
    onChange?: TListBoxOnChange;
}

export interface IListBoxContextProviderProps {
    selected?: TListBoxItemId | TListBoxItemId[];
    withMultiSelection?: boolean;
    isOpened: boolean;
    onChange?: TListBoxOnChange;
}

export type TListBoxItemId = string;

export interface IListBoxItemProps extends HTMLAttributes<HTMLLIElement> {
    id: TListBoxItemId;
    icon?: ReactElement;
    isDisabled?: boolean;
}

export type TListBoxOnChange = (itemsChecked: TListBoxItemsChecked) => void;

export type TListBoxItemsChecked = Record<TListBoxItemId, boolean>;

export interface IUseListBoxStateMethods {
    checkedOptions: TListBoxItemsChecked;
    check: (id: TListBoxItemId) => void;
    clear: () => void;
    isItemChecked: (id: TListBoxItemId) => boolean;
    onChange?: TListBoxOnChange;
}
