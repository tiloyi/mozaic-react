import React, { useState, useCallback } from 'react';
import { Story } from '@storybook/react';
import { generateDataTableRows, getRowKey } from './DataTable.fixtures';
import { IDataTableFixture, IDataTableColumn } from './DataTable.types';
import { TTableSortDirection } from '../Table';
import DataTable from './DataTable';
import Badge from '../Badge';
import HeaderCellButton from './HeaderCellButton';

const SortingRowsTemplate: Story = () => {
    const rows = generateDataTableRows(20);
    const [sortingLabel, setSortingLabel] = useState<string>('');
    const [sortingDirection, setSortingDirection] = useState<TTableSortDirection>();
    const [sortedRows, setSortedRows] = useState<Array<IDataTableFixture>>(rows);

    const countSorter =
        (dir: TTableSortDirection) =>
        (a: IDataTableFixture, b: IDataTableFixture): number =>
            dir === 'asc' ? a.count - b.count : b.count - a.count;

    const nameSorter =
        (dir: TTableSortDirection) =>
        (a: IDataTableFixture, b: IDataTableFixture): number =>
            dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);

    const handleSort = useCallback(
        () => (sortingDirection === 'asc' ? setSortingDirection('desc') : setSortingDirection('asc')),
        [setSortingDirection, sortingDirection]
    );

    const handlerSortRows = (
        label: string,
        direction: TTableSortDirection,
        sortRows: Array<IDataTableFixture>
    ): void => {
        const filteredKey: string = columns.filter(item => item.label === label)[0]?.key;
        handleSort();
        switch (filteredKey) {
            case 'name':
                setSortedRows(sortRows.sort(nameSorter(direction)));
                break;
            case 'count':
                setSortedRows(sortRows.sort(countSorter(direction)));
                break;
            default:
                break;
        }
    };

    const columns: Array<IDataTableColumn<IDataTableFixture>> = [
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
                <HeaderCellButton isSortable sortingDirection={sortingDirection} handleSort={() => handlerSortRows}>
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
    ];

    return <DataTable<IDataTableFixture> columns={columns} rows={sortedRows} getRowKey={getRowKey} />;
};

export const SortingRowsRender = SortingRowsTemplate.bind({});

/* export const argTypes = {};
isSortable?: boolean;
sortingDirection?: TTableSortDirection;
handleSort: () => void;*/
