import React from 'react';
import Table, { TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '../Table';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

export default function DataTable<R>({
    columns,
    rows,
    getRowKey,
    render,
    isRowRender
}: IDataTableProps<R>): JSX.Element {
    return (
        <Table className="mc-datatable__table">
            <TableHeader>
                <TableRow>
                    {columns.map(column => {
                        const { isSortable, key, label } = column;
                        return (
                            <TableHeaderCell key={`header-cell-${key as string}`} isSortable={isSortable}>
                                {label}
                            </TableHeaderCell>
                        );
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    if (isRowRender && !isRowRender(row)) {
                        return null;
                    }

                    const rowKey = getRowKey(row);

                    return render ? (
                        render(row, rowKey)
                    ) : (
                        <TableRow key={`row-${rowKey}`}>
                            {columns.map(column => (
                                <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
                                    {column.render ? column.render(row, column.key) : row[column.key]}
                                </TableCell>
                            ))}
                        </TableRow>
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
