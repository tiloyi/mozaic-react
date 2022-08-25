import React from 'react';
import Table, { TableBody, TableHeader, TableRow, TableHeaderCell } from '../Table';
import { DataTableRow } from './partials';
import { IDataTableProps } from './DataTable.types';

const defaultRowRendererSelector = (): boolean => false;

const getDefaultRowClassName = (): string | undefined => undefined;

function DataTable<R>({
    columns,
    rows,
    getRowKey,
    getRowClassName = getDefaultRowClassName,
    customRowRenderer,
    customRowSelector = defaultRowRendererSelector,
    onRowClick
}: IDataTableProps<R>): JSX.Element {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map(column => {
                        const { key, label, headerCellRenderer, ...props } = column;

                        return (
                            <TableHeaderCell key={`column-${key as string}`} {...props}>
                                {headerCellRenderer ? headerCellRenderer() : label}
                            </TableHeaderCell>
                        );
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);

                    if (customRowSelector(row, rowKey) && customRowRenderer !== undefined) {
                        return customRowRenderer(row, rowKey);
                    }

                    return (
                        <DataTableRow<R>
                            className={getRowClassName(row, rowKey)}
                            key={rowKey}
                            getRowKey={getRowKey}
                            row={row}
                            columns={columns}
                            onClick={onRowClick}
                        />
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default DataTable;
