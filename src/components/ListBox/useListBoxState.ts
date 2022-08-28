import { useCallback, useState } from 'react';
import { IUseListBoxStateMethods, TListBoxItemId, TListBoxItemsChecked, TListBoxOnChange } from './ListBox.types';

export interface IUseListBoxProps {
    withMultiSelection: boolean;
    defaultSelected?: TListBoxItemId | TListBoxItemId[];
    onChange?: TListBoxOnChange;
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
    defaultSelected,
    onChange
}: IUseListBoxProps): IUseListBoxStateMethods {
    const [checkedOptions, setCheckedOptions] = useState<TListBoxItemsChecked>(
        mapDefaultSelected(defaultSelected, withMultiSelection)
    );

    const isItemChecked = useCallback((id: TListBoxItemId) => checkedOptions[id] || false, [checkedOptions]);

    const checkOption = useCallback(
        (id: TListBoxItemId) => {
            if (withMultiSelection) {
                const incomingChange = { ...checkedOptions, [id]: !checkedOptions[id] };

                setCheckedOptions(prevState => ({ ...prevState, [id]: !prevState[id] }));
                if (onChange) {
                    onChange(incomingChange);
                }
            } else {
                const incomingChange = { [id]: !checkedOptions[id] };

                setCheckedOptions(prevState => ({ [id]: !prevState[id] }));
                if (onChange) {
                    onChange(incomingChange);
                }
            }
        },
        [withMultiSelection, checkedOptions]
    );

    return {
        check: checkOption,
        isItemChecked
    };
}
