import { useCallback, useEffect, useState } from 'react';
import { IUseListBoxStateMethods, TListBoxItemId, TListBoxItemsChecked, TListBoxOnChange } from './ListBox.types';

export interface IUseListBoxProps {
    withMultiSelection: boolean;
    selected?: TListBoxItemId | TListBoxItemId[];
    onChange?: TListBoxOnChange;
}

export function mapSelectedListBoxItems(
    selected?: TListBoxItemId | TListBoxItemId[],
    withMultiSelection?: boolean
): TListBoxItemsChecked {
    const output: TListBoxItemsChecked = {};

    if (selected) {
        if (Array.isArray(selected) && withMultiSelection) {
            selected.forEach(item => {
                output[item] = true;
            });
        } else if (Array.isArray(selected) && !withMultiSelection) {
            output[selected[0]] = true;
        } else if (!Array.isArray(selected)) {
            output[selected] = true;
        }
    }

    return output;
}

export default function useListBoxState({
    withMultiSelection,
    selected,
    onChange
}: IUseListBoxProps): IUseListBoxStateMethods {
    const [checkedOptions, setCheckedOptions] = useState<TListBoxItemsChecked>({});

    useEffect(() => {
        if (selected && checkedOptions) {
            if (JSON.stringify(selected) !== JSON.stringify(checkedOptions)) {
                setCheckedOptions(mapSelectedListBoxItems(selected, withMultiSelection));
            }
        }
    }, [selected, withMultiSelection]);

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
