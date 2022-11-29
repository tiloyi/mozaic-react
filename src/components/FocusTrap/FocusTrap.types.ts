import { HTMLAttributes } from 'react';

export interface IFocusTrapProps extends HTMLAttributes<HTMLDivElement> {
    focusedElementIndex?: number;
    isActive?: boolean;
}
