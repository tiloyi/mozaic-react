import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { ICustomCellFixture, generateCustomCellRows } from '../DataTable/DataTable.fixtures';
import { TableHeader, TableBody, TableRow, TableHeaderCell, TableCell, TableActionButton } from './partials';
import Badge from '../Badge';
import CheckBox from '../CheckBox';
import Link from '../Link';
import TextInput from '../TextInput';
import Table from './Table';
import SubTable from './SubTable';
import { ITableProps, TTableSortDirection } from './Table.types';
import './Table.stories.scss';

const rows = generateCustomCellRows(5);

const BasicTemplate: Story<ITableProps> = args => (
    <Table {...args}>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Count</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Link</TableHeaderCell>
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
                    <TableCell>
                        <Link href="/">Page link</Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const Basic = BasicTemplate.bind({});

Basic.args = {
    size: 'm'
};

const StickyHeaderTemplate: Story = () => (
    <Table withStickyHeader containerClassName="table-container">
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Count</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Link</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {generateCustomCellRows(50).map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>
                        <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
                    </TableCell>
                    <TableCell>
                        <Link href="/">Page link</Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const StickyHeader = StickyHeaderTemplate.bind({});

const SortableTemplate: Story = () => {
    const [data, setData] = useState<Array<ICustomCellFixture>>(() => generateCustomCellRows(10));

    const [key, setKey] = useState<'name' | 'count' | undefined>();
    const [direction, setDirection] = useState<TTableSortDirection | undefined>();

    const countSorter =
        (dir: TTableSortDirection) =>
        (a: ICustomCellFixture, b: ICustomCellFixture): number =>
            dir === 'asc' ? a.count - b.count : b.count - a.count;

    const nameSorter =
        (dir: TTableSortDirection) =>
        (a: ICustomCellFixture, b: ICustomCellFixture): number =>
            dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);

    const handleSortByCount = (nextDirection: TTableSortDirection): void => {
        setKey('count');
        setDirection(nextDirection);
        setData(prevData => prevData.sort(countSorter(nextDirection)));
    };

    const handleSortByName = (nextDirection: TTableSortDirection): void => {
        setKey('name');
        setDirection(nextDirection);
        setData(prevData => prevData.sort(nameSorter(nextDirection)));
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
                {data.map(row => (
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

const SelectedRowsTemplate: Story = () => (
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
                <TableRow key={`row-${row.id}`} isSelected={Boolean(row.id % 2)}>
                    <TableCell variant="checkbox">
                        <CheckBox isChecked={Boolean(row.id % 2)} />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const SelectedRows = SelectedRowsTemplate.bind({});

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

const TableWithSubTableTemplate: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>Id</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>0</TableCell>
                <TableCell>Name #0</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2} withSubTable>
                    <SubTable>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderCell>Label</TableHeaderCell>
                                <TableHeaderCell>Label</TableHeaderCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Sub text</TableCell>
                                <TableCell>Sub text</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sub text</TableCell>
                                <TableCell>Sub text</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sub text</TableCell>
                                <TableCell>Sub text</TableCell>
                            </TableRow>
                        </TableBody>
                    </SubTable>
                </TableCell>
            </TableRow>
            {rows.slice(1).map(row => (
                <TableRow key={`row-${row.id}`}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const TableWithSubTable = TableWithSubTableTemplate.bind({});

export const argTypes = {
    size: {
        control: 'select'
    }
};
