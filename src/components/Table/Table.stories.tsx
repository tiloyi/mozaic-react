import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { generateDataTableRows } from '../DataTable/DataTable.fixtures';
import { TableHeader, TableBody, TableRow, TableHeaderCell, TableCell, TableActionButton } from './partials';
import Badge from '../Badge';
import CheckBox from '../CheckBox';
import Table from './Table';
import TextInput from '../TextInput';
import { TTableSortDirection } from './Table.types';

const rows = generateDataTableRows(5);

const BasicTemplate: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Count</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>
                        <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const Basic = BasicTemplate.bind({});

const SortableTemplate: Story = () => {
    const [key, setKey] = useState<'name' | 'count' | undefined>();
    const [direction, setDirection] = useState<TTableSortDirection | undefined>();

    const handleSortByName = (nextDirection: TTableSortDirection): void => {
        setKey('name');
        setDirection(nextDirection);
    };

    const handleSortByCount = (nextDirection: TTableSortDirection): void => {
        setKey('count');
        setDirection(nextDirection);
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell
                        isSortable
                        sortDirection={key === 'name' ? direction : undefined}
                        onSort={handleSortByName}
                    >
                        Name
                    </TableHeaderCell>
                    <TableHeaderCell
                        isSortable
                        sortDirection={key === 'count' ? direction : undefined}
                        onSort={handleSortByCount}
                    >
                        Count
                    </TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={`row-${row.id}`}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.count}</TableCell>
                        <TableCell>
                            <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export const Sortable = SortableTemplate.bind({});

const StickyHeaderTemplate: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Count</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {generateDataTableRows(50).map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>
                        <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const StickyHeader = StickyHeaderTemplate.bind({});

const CellsWithCheckboxesTemplate: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>
                    <CheckBox />
                </TableHeaderCell>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell variant="checkbox">
                        <CheckBox />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const CellsWithCheckboxes = CellsWithCheckboxesTemplate.bind({});

const CellsWithNumbersTemplate: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell variant="number">Count</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell variant="number">{row.count}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const CellsWithNumbers = CellsWithNumbersTemplate.bind({});

const CellsWithFieldsTemplate: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell variant="field">
                        <TextInput value={row.name} size="s" />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const CellsWithFields = CellsWithFieldsTemplate.bind({});

const IconMore = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="12" r="2" />
    </svg>
);

const CellsWithButtonsTemplate: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell />
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell variant="button">
                        <TableActionButton>
                            <IconMore />
                        </TableActionButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const CellsWithButtons = CellsWithButtonsTemplate.bind({});

export const argTypes = {};
