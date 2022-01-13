import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';

describe('components/DataTable', () => {
    test('renders correctly', () => {
        render(<DataTable>Test</DataTable>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
