const modes = ['single', 'multi'] as const;

export type TOptionGroupMode = typeof modes[number];
export type TOptionGroupValue = string;

export interface IOptionGroupProps {
    mode?: TOptionGroupMode;
    name?: string;
    value?: TOptionGroupValue;
    values?: Array<TOptionGroupValue>;
    onClick?: (value?: TOptionGroupValue) => void;
}
