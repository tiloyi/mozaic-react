import React, { useCallback, useMemo, useState } from 'react';
import { Story } from '@storybook/react';
import Badge from '../Badge';
import { TTableSortDirection } from '../Table';
import Text from '../Text';
import { IBasicFixture, generateBasicRows, ICustomCellFixture, generateCustomCellRows } from './DataTable.fixtures';
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

    return (
        <DataTable<ICustomCellFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            rowRendererSelector={rowRendererSelector}
        />
    );
};

export const CustomRowRenderer = CustomRowRendererTemplate.bind({});

// const CustomRowsTemplate: Story = () => {
//     const rows = generateDataTableRows(20);
//
//     return (
//         <DataTable<IDataTableFixture>
//             columns={columns}
//             rows={rows}
//             getRowKey={getRowKey}
//             customRowRender={(row, rowKey) => (
//                 <TableRow key={`row-${rowKey}`}>
//                     {columns.map(column => (
//                         <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
//                             {column.rowCellRender ? column.rowCellRender(row, column.key) : row[column.key]}
//                         </TableCell>
//                     ))}
//                 </TableRow>
//             )}
//             isRowСustomRender={row => row.id % 2 === 0}
//         />
//     );
// };
//
// const ClickableRowTemplate: Story = () => {
//     const rows = generateDataTableRows(20);
//     const handleClickRow = (name: string): void => {
//         alert(`You click ${name} row`);
//     };
//     return (
//         <DataTable<IDataTableFixture>
//             columns={columns}
//             rows={rows}
//             getRowKey={getRowKey}
//             customRowRender={(row, rowKey) => (
//                 <TableRow key={`row-${rowKey}`} onClick={() => handleClickRow(row.name)}>
//                     {columns.map(column => (
//                         <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
//                             {column.rowCellRender ? column.rowCellRender(row, column.key) : row[column.key]}
//                         </TableCell>
//                     ))}
//                 </TableRow>
//             )}
//             isRowСustomRender={row => row.id % 2 === 0}
//         />
//     );
// };
//

//
// export const CustomRows = CustomRowsTemplate.bind({});
// export const ClickableRows = ClickableRowTemplate.bind({});
