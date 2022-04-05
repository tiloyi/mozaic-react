import React, { useState, useCallback, useMemo } from 'react';
import { Story } from '@storybook/react';
import { generateDataTableRows, getRowKey, columns } from './DataTable.fixtures';
import { IDataTableFixture, IDataTableColumn } from './DataTable.types';
import { TTableSortDirection } from '../Table';
import DataTable from './DataTable';
import Badge from '../Badge';
import HeaderCellButton from './HeaderCellButton';

const Template: Story = () => {
    const rows = generateDataTableRows(20);

    return <DataTable<IDataTableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

const SortingRowsTemplate: Story = () => {
    const rows = generateDataTableRows(20);
    const [sortingDirection, setSortingDirection] = useState<TTableSortDirection>();
    const [sortedRows, setSortedRows] = useState<Array<IDataTableFixture>>(rows);

    const countSorter =
        (dir: TTableSortDirection) =>
        (a: IDataTableFixture, b: IDataTableFixture): number =>
            dir === 'asc' ? a.count - b.count : b.count - a.count;

    const handlerSortRows = useCallback(
        (direction: TTableSortDirection, sortRows: Array<IDataTableFixture>): void => {
            if (sortingDirection === 'asc') {
                setSortingDirection('desc');
            } else {
                setSortingDirection('asc');
            }
            setSortedRows(sortRows.sort(countSorter(direction)));
        },
        [setSortingDirection, sortingDirection, setSortedRows]
    );

    const columnsSort: Array<IDataTableColumn<IDataTableFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name'
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number',
                columnCellRender: () => (
                    <HeaderCellButton
                        isSortable
                        sortingDirection={sortingDirection}
                        handleSort={() => handlerSortRows(sortingDirection, sortedRows)}
                    >
                        Count
                    </HeaderCellButton>
                )
            },
            {
                label: 'Date',
                key: 'date',
                rowCellRender: (row: IDataTableFixture) => row.date.toLocaleDateString()
            },
            {
                label: 'Status',
                key: 'status',
                rowCellRender: (row: IDataTableFixture) => (
                    <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
                )
            }
        ],
        [sortingDirection, sortedRows, handlerSortRows]
    );

    return <DataTable<IDataTableFixture> columns={columnsSort} rows={sortedRows} getRowKey={getRowKey} />;
};
export const Basic = Template.bind({});
export const SortingRowsRender = SortingRowsTemplate.bind({});
