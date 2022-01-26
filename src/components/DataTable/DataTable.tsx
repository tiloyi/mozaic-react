import React from 'react';
import Table, { TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from '../Table';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

//todo expandable rows
const handleClickExpandable = (row): void => console.log(row);

export default function DataTable<R>({ columns, rows, getRowKey, expandable }: IDataTableProps<R>): JSX.Element {
    return (
        <Table className="mc-datatable__table">
            <TableHeader>
                <TableRow>
                    {expandable && <TableCell key="expandable" />}

                    {columns.map(column => (
                        <TableHeaderCell key={`header-cell-${column.key as string}`}>{column.label}</TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);

                    return (
                        <TableRow key={`row-${rowKey}`}>
                            {expandable && (
                                <TableCell>
                                    <div aria-hidden onClick={() => handleClickExpandable(row)} role="button">
                                        {expandable.icon ? expandable.icon : <>+</>}
                                    </div>
                                </TableCell>
                            )}

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
