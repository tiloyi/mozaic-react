import React, { useState } from 'react';
import Table, { TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '../Table';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';
import { IconMinus, IconPlus } from './assets';
import { Flex, IconButton, View } from '..';

export default function DataTable<R>({
    columns,
    rows,
    getRowKey,
    onRow,
    expandable,
    empty
}: IDataTableProps<R>): JSX.Element {
    const [expandedRows, setExpandedRows] = useState<Array<string | number>>([]);

    const isExpanded = (rowKey: string | number): boolean => expandedRows.includes(rowKey);

    const handleClickExpandable = (rowKey: string | number): void => {
        if (isExpanded(rowKey)) {
            setExpandedRows(prevValue => prevValue.filter(prevRowKey => prevRowKey !== rowKey));
        } else {
            setExpandedRows(prevValue => [...prevValue, rowKey]);
        }
    };

    const fillTableBody = () => {
        if (rows.length) {
            return (
                <TableRow key="row-empty">
                    <TableCell key="row-empty-cell" colSpan={columns.length + (expandable ? 1 : 0)}>
                        <View margin="mu200">
                            <Flex justifyContent="center" alignItems="center" direction="column">
                                {empty?.icon && <View margin="mu100">{empty.icon}</View>}
                                <View margin="mu100">{empty?.title ?? 'No data'}</View>
                            </Flex>
                        </View>
                    </TableCell>
                </TableRow>
            );
        }

        return rows.map(row => {
            const rowKey = getRowKey(row);

            return (
                <>
                    <TableRow key={`row-${rowKey}`} onClick={() => onRow?.(row)}>
                        {expandable && (
                            <TableCell>
                                {(typeof expandable.rowExpandable === 'undefined' || expandable.rowExpandable(row)) && (
                                    <IconButton
                                        size="s"
                                        theme="primary"
                                        variant="bordered"
                                        onClick={() => handleClickExpandable(rowKey)}
                                    >
                                        {isExpanded(rowKey)
                                            ? expandable.closeIcon ?? <IconMinus />
                                            : expandable.openIcon ?? <IconPlus />}
                                    </IconButton>
                                )}
                            </TableCell>
                        )}

                        {columns.map(column => (
                            <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
                                {column.render ? column.render(row, column.key) : row[column.key]}
                            </TableCell>
                        ))}
                    </TableRow>

                    {expandable && isExpanded(rowKey) && (
                        <TableRow key={`row-expandable-${rowKey}`}>
                            <TableCell colSpan={columns.length + 1}>{expandable.expandedRowRender(row)}</TableCell>
                        </TableRow>
                    )}
                </>
            );
        });
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
            <TableBody>{fillTableBody()}</TableBody>
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
