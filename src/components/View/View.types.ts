import { HTMLAttributes } from 'react';
import { MagicUnit } from '../../constants';

export interface IViewProps extends Omit<HTMLAttributes<HTMLElement>, 'style'> {
    className?: string;
    margin?: MagicUnit;
    marginTop?: MagicUnit;
    marginRight?: MagicUnit;
    marginBottom?: MagicUnit;
    marginLeft?: MagicUnit;
    padding?: MagicUnit;
    paddingTop?: MagicUnit;
    paddingRight?: MagicUnit;
    paddingBottom?: MagicUnit;
    paddingLeft?: MagicUnit;
}
