import { useToggle } from '../../hooks';

export interface IUseAccordionMethods {
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export type TUseAccordionState = [boolean, IUseAccordionMethods];

export default function useAccordionState(initialIsOpen: boolean): TUseAccordionState {
    const [isOpen, { toggle, toRightValue: close, toLeftValue: open }] = useToggle(true, false, initialIsOpen);

    return [isOpen, { open, close, toggle }];
}
