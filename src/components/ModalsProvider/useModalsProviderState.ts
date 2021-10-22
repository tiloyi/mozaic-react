import { useCallback, useMemo, useState } from 'react';
import { TModalId } from '../Modal/Modal.types';
import { IModalsProviderActions, IModalState, TModalsProviderState } from './ModalsProvider.types';

function createModalState(): IModalState {
    return {
        isOpen: false
    };
}

export type TUseModalsProviderState = [TModalsProviderState, IModalsProviderActions];

export default function useModalsProviderState(): TUseModalsProviderState {
    const [state, setState] = useState<TModalsProviderState>({});

    const register = useCallback((modalId: TModalId) => {
        if (modalId in state) {
            throw new Error(`Modal with id ${modalId} already exists!`);
        }

        setState(prevState => ({ ...prevState, [modalId]: createModalState() }));
    }, []);

    const open = useCallback((modalId: TModalId) => {
        if (modalId in state) {
            setState(prevState => ({ ...prevState, [modalId]: { ...prevState[modalId], isOpen: true } }));
        }

        throw new Error(`Modal with id ${modalId} does not exist!`);
    }, []);

    const close = useCallback((modalId: TModalId) => {
        if (modalId in state) {
            setState(prevState => ({ ...prevState, [modalId]: { ...prevState[modalId], isOpen: false } }));
        }

        throw new Error(`Modal with id ${modalId} does not exist!`);
    }, []);

    const actions = useMemo(() => ({ register, open, close }), [register, open, close]);

    return [state, actions];
}
