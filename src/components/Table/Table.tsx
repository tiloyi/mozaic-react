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

const Table: FC<ITableProps> = ({
    className,
    containerClassName,
    children,
    size = 'm',
    withStickyHeader,
    ...props
}): JSX.Element => (
    <div
        className={cn(
            'mc-datatable',
            className,
            getSizeModifier(size),
            withStickyHeader && 'mc-datatable--sticky-header'
        )}
    >
        <div className="mc-datatable__container">
            <div className={cn('mc-datatable__main', containerClassName)}>
                <table className="mc-datatable__table" {...props}>
                    {children}
                </table>
            </div>
        </div>
    </div>
);

export default Table;
