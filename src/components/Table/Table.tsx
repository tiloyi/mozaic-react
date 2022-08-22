import React, { FC } from 'react';
import cn from 'classnames';
import { ITableProps, TTableSize } from './Table.types';
import './Table.scss';

export function getSizeModifier(size: TTableSize): string {
    if (size === 'm') {
        return '';
    }

    return `mc-datatable--${size}`;
}

const Table: FC<ITableProps> = ({ className, children, size = 'm', ...props }): JSX.Element => (
    <div className={cn('mc-datatable', className, getSizeModifier(size))}>
        <div className="mc-datatable__container">
            <div className="mc-datatable__main">
                <table className="mc-datatable__table" {...props}>
                    {children}
                </table>
            </div>
        </div>
    </div>
);

export default Table;
