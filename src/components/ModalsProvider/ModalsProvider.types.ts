import { TModalId } from '../Modal/Modal.types';

export interface IModalState {
    isOpen: boolean;
}

export type TModalsProviderState = Record<TModalId, IModalState>;

export type TModalsProviderAction = (modalId: TModalId) => void;

export interface IModalsProviderActions {
    register: TModalsProviderAction;
    open: TModalsProviderAction;
    close: TModalsProviderAction;
}
