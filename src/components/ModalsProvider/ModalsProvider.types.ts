import { TModalId } from '../Modal';

export interface IModalState {
    isOpen: boolean;
}

export type TModalsProviderState = Record<TModalId, IModalState>;

export type TModalsProviderAction = (modalId: TModalId) => void;

export interface IModalsProviderActions {
    register: TModalsProviderAction;
    unregister: TModalsProviderAction;
    open: TModalsProviderAction;
    close: TModalsProviderAction;
}
