import { useCallback, useState } from 'react';
import { IUseListBoxStateMethods, TListBoxItemId } from './ListBox.types';

export type TListBoxItemsChecked = Record<TListBoxItemId, boolean>;

export interface IUseListBoxProps {
    withMultiSelection: boolean;
    defaultSelected?: TListBoxItemId | TListBoxItemId[];
}

function mapDefaultSelected(
    defaultSelected?: TListBoxItemId | TListBoxItemId[],
    withMultiSelection?: boolean
): TListBoxItemsChecked {
    const output: TListBoxItemsChecked = {};

    if (defaultSelected) {
        if (Array.isArray(defaultSelected) && withMultiSelection) {
            defaultSelected.forEach(item => {
                output[item] = true;
            });
        } else if (Array.isArray(defaultSelected) && !withMultiSelection) {
            output[defaultSelected[0]] = true;
        } else if (!Array.isArray(defaultSelected)) {
            output[defaultSelected] = true;
        }
    }

    return output;
}

export default function useListBoxState({
    withMultiSelection,
    defaultSelected
}: IUseListBoxProps): IUseListBoxStateMethods {
    const [checkedOptions, setCheckedOptions] = useState<TListBoxItemsChecked>(
        mapDefaultSelected(defaultSelected, withMultiSelection)
    );

    const isItemChecked = useCallback((id: TListBoxItemId) => checkedOptions[id] || false, [checkedOptions]);

    const checkOption = useCallback(
        (id: TListBoxItemId) => {
            if (withMultiSelection) {
                setCheckedOptions(prevState => ({ ...prevState, [id]: !prevState[id] }));
            } else {
                setCheckedOptions(prevState => ({ [id]: !prevState[id] }));
            }
        },
        [withMultiSelection]
    );

    return {
        check: checkOption,
        isItemChecked
    };
}
