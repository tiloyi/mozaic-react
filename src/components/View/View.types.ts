import { HTMLAttributes, ReactHTML } from 'react';

export const magicUnits = [
    'mu025',
    'mu050',
    'mu075',
    'mu100',
    'mu125',
    'mu150',
    'mu200',
    'mu250',
    'mu300',
    'mu350',
    'mu400',
    'mu500',
    'mu600',
    'mu700',
    'mu800',
    'mu900',
    'mu1000'
] as const;

export type TMagicUnit = typeof magicUnits[number];

export const shadows = ['s', 'm', 'l'] as const;

export type TShadow = typeof shadows[number];

export interface IViewProps extends Omit<HTMLAttributes<HTMLElement>, 'style'> {
    className?: string;
    as?: keyof ReactHTML;
    margin?: TMagicUnit;
    marginTop?: TMagicUnit;
    marginRight?: TMagicUnit;
    marginBottom?: TMagicUnit;
    marginLeft?: TMagicUnit;
    padding?: TMagicUnit;
    paddingTop?: TMagicUnit;
    paddingRight?: TMagicUnit;
    paddingBottom?: TMagicUnit;
    paddingLeft?: TMagicUnit;
    shadow?: TShadow;
}
