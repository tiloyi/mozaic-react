import React from 'react';
import { DataTableCell, DataTableRow } from './partials';
import Table, { TableHeader, TableRow, TableHeaderCell, TableBody } from '../Table';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

export default function DataTable<R>({ columns, rows, getRowKey }: IDataTableProps<R>): JSX.Element {
    return (
        <Table className="mc-datatable__table">
            <TableHeader>
                <TableRow>
                    {columns.map(column => (
                        <TableHeaderCell key={`header-cell-${column.key as string}`}>{column.label}</TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);

                    return (
                        <DataTableRow key={`row-${rowKey}`}>
                            {columns.map(column => (
                                <DataTableCell
                                    key={`row-${rowKey}-cell-${column.key as string}`}
                                    variant={column.variant}
                                >
                                    {column.render ? column.render(row, column.key) : row[column.key]}
                                </DataTableCell>
                            ))}
                        </DataTableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

/**
 <DataTable>
 <DataTableHeader isSticky />
 <DataTableBody />
 <DataTablePagination />
 </DataTable>
 **/

/**
 * - кастомный рендер для строки
 * - раскрываемая строка
 * - кликабельная строка
 * - пустая страница (компонент с сообщением)
 * - состояние ожидания первой страницы
 * - состояние ожидания второй страницы (если есть подгрузка)
 * - объединённые ячейки
 */

/**
 * PagedDataTable - таблица со встроенной пагинацией
 */
