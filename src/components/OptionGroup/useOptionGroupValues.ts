import { useCallback, useMemo, useState } from 'react';
import { TOptionGroupValue } from './OptionGroup.types';

export interface IUseListBoxValuesMethods {
    clear: () => void;
    add: (value: TOptionGroupValue) => void;
    remove: (value: TOptionGroupValue) => void;
}

export type TUseOptionGroupValues = [Array<TOptionGroupValue>, IUseListBoxValuesMethods];

export default function useOptionGroupValues(initialValues: Array<TOptionGroupValue> = []): TUseOptionGroupValues {
    const [values, setValues] = useState<Array<TOptionGroupValue>>(initialValues);

    const add = useCallback((value: TOptionGroupValue) => setValues(prevValues => [...prevValues, value]), []);

    const remove = useCallback(
        (value: TOptionGroupValue) => setValues(prevValues => prevValues.filter(v => v !== value)),
        []
    );

    const clear = useCallback(() => setValues([]), []);

    const methods = useMemo(() => ({ add, remove, clear }), [add, remove, clear]);

    return [values, methods];
}
