import { useCallback, useMemo, useState } from 'react';

export interface IUseListMethods<T> {
    clear: () => void;
    add: (value: T) => void;
    remove: (value: T) => void;
}

export type TUseList<T> = [Array<T>, IUseListMethods<T>];

export default function useList<T>(initialItems: Array<T> = []): TUseList<T> {
    const [values, setValues] = useState<Array<T>>(initialItems);

    const add = useCallback((value: T) => setValues(prevValues => [...prevValues, value]), []);

    const remove = useCallback((value: T) => setValues(prevValues => prevValues.filter(v => v !== value)), []);

    const clear = useCallback(() => setValues([]), []);

    const methods = useMemo(() => ({ add, remove, clear }), [add, remove, clear]);

    return [values, methods];
}
