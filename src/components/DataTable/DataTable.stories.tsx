import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CheckBox from '../CheckBox';
import Badge from '../Badge';
import { TableExpandButton, TTableSortDirection } from '../Table';
import Text from '../Text';
import {
    IBasicFixture,
    generateBasicRows,
    ICustomCellFixture,
    generateCustomCellRows,
    ISelectableFixture,
    generateSelectableRows
} from './DataTable.fixtures';
import { DataTableRow } from './partials';
import { IDataTableColumn } from './DataTable.types';
import DataTable from './DataTable';
import './DataTable.stories.scss';

const BasicTemplate: Story = () => {
    const rows = generateBasicRows(15);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
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
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return <DataTable<IBasicFixture> rows={rows} columns={columns} getRowKey={getRowKey} />;
};

export const Basic = BasicTemplate.bind({});

const EmptyTableTemplate: Story = () => {
    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
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
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return (
        <DataTable<IBasicFixture> tableClassName="story-datatable" columns={columns} rows={[]} getRowKey={getRowKey}>
            Пустая таблица
        </DataTable>
    );
};

export const ToDoEmptyTable = EmptyTableTemplate.bind({});

const PendingTemplate: Story = () => {
    const rows = generateBasicRows(15);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
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
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return <DataTable<IBasicFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const ToDoPending = PendingTemplate.bind({});

const ClickOnRowTemplate: Story = () => {
    const rows = generateBasicRows(5);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
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
                variant: 'number'
            }
        ],
        []
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return (
        <DataTable<IBasicFixture> columns={columns} rows={rows} getRowKey={getRowKey} onRowClick={action('Click!')} />
    );
};

export const ClickOnRow = ClickOnRowTemplate.bind({});

const SortingTemplate: Story = () => {
    const [rows, setRows] = useState<Array<IBasicFixture>>(() => generateBasicRows(10));

    const [key, setKey] = useState<'name' | 'count' | undefined>();
    const [direction, setDirection] = useState<TTableSortDirection | undefined>();

    const countSorter =
        (dir: TTableSortDirection) =>
        (a: IBasicFixture, b: IBasicFixture): number =>
            dir === 'asc' ? a.count - b.count : b.count - a.count;

    const nameSorter =
        (dir: TTableSortDirection) =>
        (a: IBasicFixture, b: IBasicFixture): number =>
            dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);

    const handleSortByCount = useCallback((nextDirection: TTableSortDirection): void => {
        setKey('count');
        setDirection(nextDirection);
        setRows(prevData => prevData.sort(countSorter(nextDirection)));
    }, []);

    const handleSortByName = useCallback((nextDirection: TTableSortDirection): void => {
        setKey('name');
        setDirection(nextDirection);
        setRows(prevData => prevData.sort(nameSorter(nextDirection)));
    }, []);

    const columns: Array<IDataTableColumn<IBasicFixture>> = useMemo(
        () => [
            {
                label: 'Id',
                key: 'id'
            },
            {
                label: 'Name',
                key: 'name',
                isSortable: true,
                sortDirection: key === 'name' ? direction : undefined,
                onSort: handleSortByName
            },
            {
                label: 'Count',
                key: 'count',
                variant: 'number',
                isSortable: true,
                sortDirection: key === 'count' ? direction : undefined,
                onSort: handleSortByCount
            }
        ],
        [key, direction, handleSortByName, handleSortByCount]
    );

    const getRowKey = useCallback((row: IBasicFixture) => row.id, []);

    return <DataTable<IBasicFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const Sorting = SortingTemplate.bind({});

const CustomCellTemplate: Story = () => {
    const rows = generateCustomCellRows(15);

    const columns: Array<IDataTableColumn<ICustomCellFixture>> = useMemo(
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
                variant: 'number'
            },
            {
                key: 'date',
                render: row => row.date.toLocaleDateString(),
                renderLabel: () => (
                    <Text theme="warning" size="s">
                        Date
                    </Text>
                )
            },
            {
                label: 'Status',
                key: 'status',
                render: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    return <DataTable<ICustomCellFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const CustomCell = CustomCellTemplate.bind({});

const CustomRowsTemplate: Story = () => {
    const rows = generateCustomCellRows(15);

    const columns: Array<IDataTableColumn<ICustomCellFixture>> = useMemo(
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
                variant: 'number'
            },
            {
                label: 'Date',
                key: 'date',
                render: row => row.date.toLocaleDateString()
            },
            {
                label: 'Status',
                key: 'status',
                render: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    const rowRendererSelector = useCallback((row, key) => key % 2 === 0, []);

    const renderRow = (row: ICustomCellFixture): JSX.Element => (
        <DataTableRow<ICustomCellFixture>
            key={getRowKey(row)}
            row={row}
            getRowKey={getRowKey}
            columns={columns}
            isSelected
        />
    );

    return (
        <DataTable<ICustomCellFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            selectCustomRow={rowRendererSelector}
            renderCustomRow={renderRow}
        />
    );
};

export const CustomRows = CustomRowsTemplate.bind({});

const SelectableRowsTemplate: Story = () => {
    const [rows, setRows] = useState<Array<ISelectableFixture>>(() => generateSelectableRows(10));

    const handleChange = useCallback(
        (rowId: number) => (event: ChangeEvent<HTMLInputElement>) => {
            const index = rows.findIndex(r => r.id === rowId);
            const isSelected = event.target.checked;

            if (index !== -1) {
                setRows(prevRows => [
                    ...prevRows.slice(0, index),
                    {
                        ...prevRows[index],
                        isSelected
                    },
                    ...prevRows.slice(index + 1)
                ]);
            }
        },
        [rows]
    );

    const handleAllRowsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const isSelected = event.target.checked;

        setRows(prevRows => prevRows.map(r => ({ ...r, isSelected })));
    }, []);

    const columns: Array<IDataTableColumn<ISelectableFixture>> = useMemo(
        () => [
            {
                render: row => <CheckBox isChecked={row.isSelected} onChange={handleChange(row.id)} />,
                renderLabel: () => (
                    <CheckBox isChecked={rows.every(r => r.isSelected)} onChange={handleAllRowsChange} />
                ),
                variant: 'checkbox'
            },
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
                variant: 'number'
            }
        ],
        [handleChange, rows]
    );

    const getRowKey = useCallback((row: ISelectableFixture) => row.id, []);

    return <DataTable<ISelectableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const SelectableRows = SelectableRowsTemplate.bind({});

const ExpandableRowsTemplate: Story = () => {
    const rows = generateCustomCellRows(15);

    const columns: Array<IDataTableColumn<ICustomCellFixture>> = useMemo(
        () => [
            {
                render: () => <TableExpandButton />
            },
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
                variant: 'number'
            },
            {
                label: 'Date',
                key: 'date',
                render: row => row.date.toLocaleDateString()
            },
            {
                label: 'Status',
                key: 'status',
                render: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    return <DataTable<ICustomCellFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const ExpandableRows = ExpandableRowsTemplate.bind({});
