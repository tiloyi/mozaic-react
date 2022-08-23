import React, { useState, useCallback, useMemo } from 'react';
import { Story } from '@storybook/react';
import { IBasicFixture, generateBasicRows } from './DataTable.fixtures';
import { IDataTableColumn } from './DataTable.types';
import DataTable from './DataTable';
// import { TTableSortDirection } from '../Table';
// import Badge from '../Badge';
// import HeaderCellButton from './HeaderCellButton';
// import { TableCell, TableRow } from '../Table/partials';

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

// const Template: Story = () => {
//     const rows = generateDataTableRows(20);
//
//     return <DataTable<IDataTableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
// };
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
// const SortingRowsTemplate: Story = () => {
//     const rows = generateDataTableRows(20);
//     const [sortingDirection, setSortingDirection] = useState<TTableSortDirection>();
//     const [sortedRows, setSortedRows] = useState<Array<IDataTableFixture>>(rows);
//
//     const countSorter =
//         (dir: TTableSortDirection) =>
//         (a: IDataTableFixture, b: IDataTableFixture): number =>
//             dir === 'asc' ? a.count - b.count : b.count - a.count;
//
//     const handlerSortRows = useCallback(
//         (direction: TTableSortDirection, sortRows: Array<IDataTableFixture>): void => {
//             if (sortingDirection === 'asc') {
//                 setSortingDirection('desc');
//             } else {
//                 setSortingDirection('asc');
//             }
//             setSortedRows(sortRows.sort(countSorter(direction)));
//         },
//         [setSortingDirection, sortingDirection, setSortedRows]
//     );
//
//     const columnsSort: Array<IDataTableColumn<IDataTableFixture>> = useMemo(
//         () => [
//             {
//                 label: 'Id',
//                 key: 'id'
//             },
//             {
//                 label: 'Name',
//                 key: 'name'
//             },
//             {
//                 label: 'Count',
//                 key: 'count',
//                 variant: 'number',
//                 columnCellRender: () => (
//                     <HeaderCellButton
//                         isSortable
//                         sortingDirection={sortingDirection}
//                         handleSort={() => handlerSortRows(sortingDirection, sortedRows)}
//                     >
//                         Count
//                     </HeaderCellButton>
//                 )
//             },
//             {
//                 label: 'Date',
//                 key: 'date',
//                 rowCellRender: (row: IDataTableFixture) => row.date.toLocaleDateString()
//             },
//             {
//                 label: 'Status',
//                 key: 'status',
//                 rowCellRender: (row: IDataTableFixture) => (
//                     <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
//                 )
//             }
//         ],
//         [sortingDirection, sortedRows, handlerSortRows]
//     );
//
//     return <DataTable<IDataTableFixture> columns={columnsSort} rows={sortedRows} getRowKey={getRowKey} />;
// };
//
// export const Basic = Template.bind({});
// export const CustomRows = CustomRowsTemplate.bind({});
// export const ClickableRows = ClickableRowTemplate.bind({});
// export const SortingRows = SortingRowsTemplate.bind({});
