import React from 'react';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

export default function DataTable<R>({ columns, rows, getRowKey }: IDataTableProps<R>): JSX.Element {
    return (
        <table className="mc-datatable__table">
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={`header-cell-${column.key as string}`}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);

                    return (
                        <tr key={`row-${rowKey}`}>
                            {columns.map(column => (
                                <td key={`row-${rowKey}-cell-${column.key as string}`}>
                                    {column.render ? column.render(row, column.key) : row[column.key]}
                                </td>
                            ))}
                        </tr>
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
 */

/**
 * PagedDataTable - таблица со встроенной пагинацией
 */
