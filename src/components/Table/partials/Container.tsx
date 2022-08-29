import React, { FC } from 'react';
import cn from 'classnames';
import { ITableContainerProps, TTableSize } from '../Table.types';

export function getSizeModifier(size: TTableSize): string {
    if (size === 'm') {
        return '';
    }

    return `mc-datatable--${size}`;
}

const Table: FC<ITableContainerProps> = ({
    className,
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
        {...props}
    >
        <div className="mc-datatable__container">{children}</div>
    </div>
);

export default Table;
