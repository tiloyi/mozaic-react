export interface IModalState {
    isOpen: boolean;
}

export type TModalsProviderState = Record<string, IModalState>;

export type TModalsProviderAction = (modalId: string) => void;

export interface IModalsProviderActions {
    register: TModalsProviderAction;
    unregister: TModalsProviderAction;
    open: TModalsProviderAction;
    close: TModalsProviderAction;
}
