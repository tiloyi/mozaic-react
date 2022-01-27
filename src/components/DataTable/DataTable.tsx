import React, { useState } from 'react';
import Table, { TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from '../Table';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

export default function DataTable<R>({ columns, rows, getRowKey, onRow, expandable }: IDataTableProps<R>): JSX.Element {
    const [expandedRows, setExpandedRows] = useState<Array<string | number>>([]);

    const isExpanded = (rowKey: string | number): boolean => expandedRows.includes(rowKey);

    const handleClickExpandable = (rowKey: string | number): void => {
        if (isExpanded(rowKey)) {
            setExpandedRows(prevValue => prevValue.filter(prevRowKey => prevRowKey !== rowKey));
        } else {
            setExpandedRows(prevValue => [...prevValue, rowKey]);
        }
    };

    return (
        <Table className="mc-datatable__table">
            <TableHeader>
                <TableRow>
                    {expandable && <TableHeaderCell />}
                    {columns.map(column => (
                        <TableHeaderCell key={`header-cell-${column.key as string}`}>{column.label}</TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);

                    return (
                        <>
                            <TableRow key={`row-${rowKey}`} onClick={() => onRow?.(row)}>
                                {expandable && (
                                    <TableCell>
                                        <span
                                            aria-hidden
                                            role="button"
                                            onClick={() => handleClickExpandable(rowKey)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {isExpanded(rowKey) ? (
                                                expandable.closeIcon ? (
                                                    expandable.closeIcon
                                                ) : (
                                                    <span>-</span>
                                                )
                                            ) : expandable.openIcon ? (
                                                expandable.openIcon
                                            ) : (
                                                <span>+</span>
                                            )}
                                        </span>
                                    </TableCell>
                                )}
                                {columns.map(column => (
                                    <TableCell
                                        key={`row-${rowKey}-cell-${column.key as string}`}
                                        variant={column.variant}
                                    >
                                        {column.render ? column.render(row, column.key) : row[column.key]}
                                    </TableCell>
                                ))}
                            </TableRow>

                            {expandable && isExpanded(rowKey) && (
                                <TableRow key={`row-expandable-${rowKey}`}>
                                    <TableCell colSpan={columns.length + 1}>
                                        {expandable.expandedRowRender(row)}
                                    </TableCell>
                                </TableRow>
                            )}
                        </>
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
 * - кликабельная строка +
 * - пустая страница (компонент с сообщением)
 * - состояние ожидания первой страницы
 * - состояние ожидания второй страницы (если есть подгрузка)
 * - объединённые ячейки
 */

/**
 * PagedDataTable - таблица со встроенной пагинацией
 */
