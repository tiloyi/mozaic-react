import React, { useCallback, useMemo, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Badge from '../Badge';
import { TTableSortDirection } from '../Table';
import Text from '../Text';
import { IBasicFixture, generateBasicRows, ICustomCellFixture, generateCustomCellRows } from './DataTable.fixtures';
import { DataTableRow } from './partials';
import { IDataTableColumn } from './DataTable.types';
import DataTable from './DataTable';

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

    return <DataTable<IBasicFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
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

    return <DataTable<IBasicFixture> columns={columns} rows={[]} getRowKey={getRowKey} />;
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

const CustomCellRendererTemplate: Story = () => {
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
                cellRenderer: row => row.date.toLocaleDateString(),
                headerCellRenderer: () => (
                    <Text theme="warning" size="s">
                        Date
                    </Text>
                )
            },
            {
                label: 'Status',
                key: 'status',
                cellRenderer: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    return <DataTable<ICustomCellFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

export const CustomCellRenderer = CustomCellRendererTemplate.bind({});

const CustomRowRendererTemplate: Story = () => {
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
                cellRenderer: row => row.date.toLocaleDateString()
            },
            {
                label: 'Status',
                key: 'status',
                cellRenderer: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    const rowRendererSelector = useCallback((row, key) => key % 2 === 0, []);

    const rowRenderer = (row: ICustomCellFixture): JSX.Element => (
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
            rowRendererSelector={rowRendererSelector}
            rowRenderer={rowRenderer}
        />
    );
};

export const CustomRowRenderer = CustomRowRendererTemplate.bind({});

const WithCheckBoxesTemplate: Story = () => {
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
                cellRenderer: row => row.date.toLocaleDateString()
            },
            {
                label: 'Status',
                key: 'status',
                cellRenderer: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    const rowRendererSelector = useCallback((row, key) => key % 2 === 0, []);

    const rowRenderer = (row: ICustomCellFixture): JSX.Element => (
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
            rowRendererSelector={rowRendererSelector}
            rowRenderer={rowRenderer}
        />
    );
};

export const ToDoWithCheckBoxes = WithCheckBoxesTemplate.bind({});

const WithExpandableRowsTemplate: Story = () => {
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
                cellRenderer: row => row.date.toLocaleDateString()
            },
            {
                label: 'Status',
                key: 'status',
                cellRenderer: row => <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
            }
        ],
        []
    );

    const getRowKey = useCallback((row: ICustomCellFixture) => row.id, []);

    const rowRendererSelector = useCallback((row, key) => key % 2 === 0, []);

    const rowRenderer = (row: ICustomCellFixture): JSX.Element => (
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
            rowRendererSelector={rowRendererSelector}
            rowRenderer={rowRenderer}
        />
    );
};

export const ToDoWithExpandableRows = WithExpandableRowsTemplate.bind({});
