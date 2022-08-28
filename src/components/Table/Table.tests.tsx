import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TableActionButton, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from './partials';
import SubTable from './SubTable';

describe('components/Table', () => {
    describe('TableActionButton', () => {
        test('renders correctly', () => {
            render(<TableActionButton>button</TableActionButton>);

            expect(screen.getByRole('button', { name: 'button' })).toBeInTheDocument();
        });

        test('handles click', async () => {
            const onClick = jest.fn();

            render(<TableActionButton onClick={onClick}>button</TableActionButton>);

            await userEvent.click(screen.getByRole('button', { name: 'button' }));

            expect(onClick).toBeCalledTimes(1);
        });
    });

    describe('TableBody', () => {
        test('renders correctly', () => {
            render(
                <TableBody>
                    <span data-testid="row" />
                </TableBody>
            );

            expect(screen.getByTestId('row')).toBeInTheDocument();
        });
    });

    describe('TableCell', () => {
        test('renders correctly', () => {
            render(<TableCell>cell</TableCell>);

            expect(screen.getByRole('cell')).toHaveTextContent('cell');
        });

        test('renders correctly with button', () => {
            render(<TableCell variant="button">cell</TableCell>);

            expect(screen.getByRole('cell')).toHaveClass('mc-datatable__cell-button');
        });

        test('renders correctly with number', () => {
            render(<TableCell variant="number">cell</TableCell>);

            expect(screen.getByRole('cell')).toHaveClass('mc-datatable__cell-number');
        });

        test('renders correctly with checkbox', () => {
            render(<TableCell variant="checkbox">cell</TableCell>);

            expect(screen.getByRole('cell')).toHaveClass('mc-datatable__cell-checkbox');
        });

        test('renders correctly with field', () => {
            render(<TableCell variant="field">cell</TableCell>);

            expect(screen.getByRole('cell')).toHaveClass('mc-datatable__cell-field');
        });
    });

    describe('TableHeader', () => {
        test('renders correctly', () => {
            render(
                <TableHeader>
                    <span data-testid="row" />
                </TableHeader>
            );

            expect(screen.getByTestId('row')).toBeInTheDocument();
        });
    });

    describe('TableHeaderCell', () => {
        test('renders correctly', () => {
            render(<TableHeaderCell>cell</TableHeaderCell>);

            expect(screen.getByRole('columnheader')).toHaveTextContent('cell');
        });

        test('renders correctly with button', () => {
            render(<TableHeaderCell variant="button">cell</TableHeaderCell>);

            expect(screen.getByRole('columnheader')).toHaveClass('mc-datatable__cell-button');
        });

        test('renders correctly with number', () => {
            render(<TableHeaderCell variant="number">cell</TableHeaderCell>);

            expect(screen.getByRole('columnheader')).toHaveClass('mc-datatable__cell-number');
        });

        test('renders correctly with checkbox', () => {
            render(<TableHeaderCell variant="checkbox">cell</TableHeaderCell>);

            expect(screen.getByRole('columnheader')).toHaveClass('mc-datatable__cell-checkbox');
        });

        test('renders correctly with field', () => {
            render(<TableHeaderCell variant="field">cell</TableHeaderCell>);

            expect(screen.getByRole('columnheader')).toHaveClass('mc-datatable__cell-field');
        });

        test('renders with asc sorting', () => {
            render(
                <TableHeaderCell isSortable sortDirection="asc">
                    cell
                </TableHeaderCell>
            );

            expect(screen.getByRole('button', { name: 'cell' })).toHaveClass('asc');
        });

        test('renders with desc sorting', () => {
            render(
                <TableHeaderCell isSortable sortDirection="desc">
                    cell
                </TableHeaderCell>
            );

            expect(screen.getByRole('button', { name: 'cell' })).toHaveClass('desc');
        });

        test('handles sorting callback', async () => {
            const onSort = jest.fn();

            render(
                <TableHeaderCell isSortable sortDirection="desc" onSort={onSort}>
                    cell
                </TableHeaderCell>
            );

            await userEvent.click(screen.getByRole('button', { name: 'cell' }));

            expect(onSort).toBeCalledWith('asc');
        });
    });

    describe('TableRow', () => {
        test('renders correctly', () => {
            render(
                <TableRow>
                    <span data-testid="row" />
                </TableRow>
            );

            expect(screen.getByTestId('row')).toBeInTheDocument();
        });

        test('renders in selected state', () => {
            render(
                <TableRow isSelected>
                    <span />
                </TableRow>
            );

            expect(screen.getByRole('row')).toHaveClass('selected');
        });
    });

    describe('SubTable', () => {
        test('renders correctly', () => {
            render(
                <SubTable>
                    <span data-testid="row" />
                </SubTable>
            );

            expect(screen.getByTestId('row')).toBeInTheDocument();
        });
    });
});
