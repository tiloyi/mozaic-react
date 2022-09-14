import { useCallback, useMemo, useState } from 'react';
import { TListBoxValue } from './ListBox.types';

export interface IUseListBoxValuesMethods {
    clear: () => void;
    add: (value: TListBoxValue) => void;
    remove: (value: TListBoxValue) => void;
}

export type TUseListBoxValues = [Array<TListBoxValue>, IUseListBoxValuesMethods];

export default function useListBoxValues(initialValues: Array<TListBoxValue> = []): TUseListBoxValues {
    const [values, setValues] = useState<Array<TListBoxValue>>(initialValues);

    const add = useCallback((value: TListBoxValue) => setValues(prevValues => [...prevValues, value]), []);

    const remove = useCallback(
        (value: TListBoxValue) => setValues(prevValues => prevValues.filter(v => v !== value)),
        []
    );

    const clear = useCallback(() => setValues([]), []);

    const methods = useMemo(() => ({ add, remove, clear }), [add, remove, clear]);

    return [values, methods];
}
