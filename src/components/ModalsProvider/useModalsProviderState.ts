import { useCallback, useMemo, useState } from 'react';
import { TModalId } from '../Modal/Modal.types';
import { IModalsProviderActions, TModalsProviderState } from './ModalsProvider.types';

export type TUseModalsProviderState = [TModalsProviderState, IModalsProviderActions];

export default function useModalsProviderState(): TUseModalsProviderState {
    const [state, setState] = useState<TModalsProviderState>({});

    const register = useCallback((modalId: TModalId) => {
        if (modalId in state) {
            throw new Error(`Modal with id ${modalId} already exists!`);
        }

        debugger;
    }, []);

    const open = useCallback((modalId: TModalId) => {
        if (modalId in state) {
            debugger;
        }

        throw new Error(`Modal with id ${modalId} does not exist!`);
    }, []);

    const close = useCallback((modalId: TModalId) => {
        if (modalId in state) {
            debugger;
        }

        throw new Error(`Modal with id ${modalId} does not exist!`);
    }, []);

    const actions = useMemo(() => ({ register, open, close }), [register, open, close]);

    return [state, actions];
}
