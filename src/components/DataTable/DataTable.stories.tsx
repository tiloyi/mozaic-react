import React, { useState } from 'react';

import { Story } from '@storybook/react';
import { columns, generateDataTableRows, getRowKey, IDataTableFixture } from './DataTable.fixtures';
import DataTable from './DataTable';
import { TableCell, TableRow } from '../Table/partials';

const Template: Story = () => {
    const rows = generateDataTableRows(20);

    return <DataTable<IDataTableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />;
};

const CustomRowTemplate: Story = () => {
    const rows = generateDataTableRows(20);
    const [rowsInOrder, setRowsInOrder] = useState(rows);
    return (
        <DataTable<IDataTableFixture>
            columns={columns}
            rows={rowsInOrder}
            getRowKey={getRowKey}
            render={(row, rowKey) => (
                <TableRow key={`row-${rowKey}`}>
                    {columns.map(column => (
                        <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
                            {column.render ? column.render(row, column.key) : row[column.key]}
                        </TableCell>
                    ))}
                </TableRow>
            )}
            isRowRender={row => row.id % 2 === 0}
        />
    );
};

const ClickableRowTemplate: Story = () => {
    const rows = generateDataTableRows(20);

    const handleClickRow = (name: string): void => {
        alert(`You click ${name} row`);
    };

    return (
        <DataTable<IDataTableFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            render={(row, rowKey) => (
                <TableRow key={`row-${rowKey}`} onClick={() => handleClickRow(row.name)}>
                    {columns.map(column => (
                        <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
                            {column.render ? column.render(row, column.key) : row[column.key]}
                        </TableCell>
                    ))}
                </TableRow>
            )}
            isRowRender={row => row.id % 2 === 0}
        />
    );
};

const SortableTemplate: Story = () => {
    const rows = generateDataTableRows(20);

    return (
        <DataTable<IDataTableFixture>
            columns={columns}
            rows={rows}
            getRowKey={getRowKey}
            render={(row, rowKey) => (
                <TableRow key={`row-${rowKey}`}>
                    {columns.map(column => (
                        <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
                            {column.render ? column.render(row, column.key) : row[column.key]}
                        </TableCell>
                    ))}
                </TableRow>
            )}
            isRowRender={row => row.id % 2 === 0}
        />
    );
};

export const Basic = Template.bind({});
export const CustomRowRender = CustomRowTemplate.bind({});
export const ClickableRow = ClickableRowTemplate.bind({});
export const Sortable = SortableTemplate.bind({});

export const argTypes = {};
