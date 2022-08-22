import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './partials';

describe('components/Table', () => {
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
});
