import React from 'react';
import { Story } from '@storybook/react';
import { generateDataTableRows } from '../DataTable/DataTable.fixtures';
import { TableHeader, TableBody, TableRow, TableHeaderCell, TableHeaderLabel, TableCell } from './partials';
import Table from './Table';
import Badge from '../Badge';

const rows = generateDataTableRows(10);

const Template: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>
                    <TableHeaderLabel>Id</TableHeaderLabel>
                </TableHeaderCell>
                <TableHeaderCell>
                    <TableHeaderLabel>Name</TableHeaderLabel>
                </TableHeaderCell>
                <TableHeaderCell>
                    <TableHeaderLabel>Count</TableHeaderLabel>
                </TableHeaderCell>
                <TableHeaderCell>
                    <TableHeaderLabel>Status</TableHeaderLabel>
                </TableHeaderCell>
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

export const Basic = Template.bind({});

export const argTypes = {};
