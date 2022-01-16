import React from 'react';
import { DataTableCell, DataTableRow } from './partials';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

export default function DataTable<R>({ columns, rows, getRowKey }: IDataTableProps<R>): JSX.Element {
    return (
        <table className="mc-datatable__table">
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={`header-cell-${column.key as string}`}>{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
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
            </tbody>
        </table>
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
 * - идентификатор для строки
 * - кастомный рендер для ячейки
 * - кастомный рендер для строки
 * - раскрываемая строка
 * - строка с чек-боксом
 * - кликабельная строка
 * - редактируемая ячейка
 * - ячейка с числом
 * - пустая страница (компонент с сообщением)
 * - состояние ожидания первой страницы
 * - состояние ожидания второй страницы (если есть подгрузка)
 * - объединённые ячейки
 */

/**
 * PagedDataTable - таблица со встроенной пагинацией
 */
