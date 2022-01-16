import React from 'react';
import { Story } from '@storybook/react';
import { TableHeader, TableBody, TableRow, TableHeaderCell, TableHeaderLabel, TableCell } from './partials';
import Table from './Table';

const Template: Story = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>
                    <TableHeaderLabel>Id</TableHeaderLabel>
                </TableHeaderCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>1</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const Basic = Template.bind({});

export const argTypes = {};
