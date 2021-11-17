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

    const register = useCallback(
        (modalId: TModalId) =>
            setState(prevState => {
                if (modalId in prevState) {
                    throw new Error(`Modal with id ${modalId} already exists!`);
                }

                return { ...prevState, [modalId]: createModalState() };
            }),
        []
    );

    const unregister = useCallback(
        (modalId: TModalId) =>
            setState(prevState => {
                if (modalId in prevState) {
                    delete prevState[modalId];
                }

                return prevState;
            }),
        []
    );

    const open = useCallback(
        (modalId: TModalId) =>
            setState(prevState => {
                if (modalId in prevState) {
                    return { ...prevState, [modalId]: { ...prevState[modalId], isOpen: true } };
                }

                throw new Error(`Modal with id ${modalId} does not exist!`);
            }),
        []
    );

    const close = useCallback(
        (modalId: TModalId) =>
            setState(prevState => {
                if (modalId in prevState) {
                    return { ...prevState, [modalId]: { ...prevState[modalId], isOpen: false } };
                }

                throw new Error(`Modal with id ${modalId} does not exist!`);
            }),
        []
    );

    const actions = useMemo(() => ({ register, unregister, open, close }), [register, open, close]);

    return [state, actions];
}
