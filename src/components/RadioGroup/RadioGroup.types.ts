import { ChangeEvent } from 'react';

export interface IRadioGroupProps {
    name: string;
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
