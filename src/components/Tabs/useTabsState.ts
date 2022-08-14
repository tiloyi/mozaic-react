import { useCallback, useMemo, useState } from 'react';

export interface IUseTabsState {
    tab: string;
    select: (tab: string) => void;
}

export default function useTabsState(defaultTab: string): IUseTabsState {
    const [tab, setTab] = useState<string>(defaultTab);

    const select = useCallback((nextTab: string) => setTab(nextTab), []);

    return useMemo(() => ({ tab, select }), [tab, select]);
}
