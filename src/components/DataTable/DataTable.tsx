import React from 'react';
import { Table, TableBody, TableHeader, TableRow, TableHeaderCell, TableContainer } from '../Table';
import { DataTableRow, DataTablePendingOverlay } from './partials';
import { IDataTableProps } from './DataTable.types';

const defaultRowSelector = (): boolean => false;

const getDefaultRowClassName = (): string | undefined => undefined;

function DataTable<R>({
    className,
    tableClassName,
    children,
    columns,
    rows,
    isHeaderHidden,
    isPending,
    withStickyHeader,
    getRowKey,
    getRowClassName = getDefaultRowClassName,
    renderCustomRow,
    selectCustomRow = defaultRowSelector,
    onRowClick
}: IDataTableProps<R>): JSX.Element {
    return (
        <TableContainer className={className} withStickyHeader={withStickyHeader}>
            <Table className={tableClassName}>
                {!isHeaderHidden && (
                    <TableHeader>
                        <TableRow>
                            {columns.map(column => {
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                const { key, label, variant, render, renderLabel, ...props } = column;

                                return (
                                    <TableHeaderCell key={`column-${key as string}`} variant={variant} {...props}>
                                        {renderLabel ? renderLabel(rows) : label}
                                    </TableHeaderCell>
                                );
                            })}
                        </TableRow>
                    </TableHeader>
                )}
                <TableBody>
                    {rows.map(row => {
                        const rowKey = getRowKey(row);

                        if (selectCustomRow(row, rowKey) && renderCustomRow !== undefined) {
                            return renderCustomRow(row, rowKey);
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
            {children}
            {isPending && <DataTablePendingOverlay />}
        </TableContainer>
    );
}

export default DataTable;
