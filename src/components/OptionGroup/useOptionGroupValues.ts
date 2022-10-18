import { useList, TUseList } from '../../hooks';
import { TOptionGroupValue } from './OptionGroup.types';

export default function useOptionGroupValues(
    initialValues: Array<TOptionGroupValue> = []
): TUseList<TOptionGroupValue> {
    return useList<TOptionGroupValue>(initialValues);
}
