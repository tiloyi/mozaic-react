import { useList, TUseList } from '../../hooks';
import { TListBoxValue } from './ListBox.types';

export default function useListBoxValues(initialValues: Array<TListBoxValue> = []): TUseList<TListBoxValue> {
    return useList<TListBoxValue>(initialValues);
}
