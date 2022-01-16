import React from 'react';
import { render, screen } from '@testing-library/react';
import { generateDataTableRows, columns, getRowKey, IDataTableFixture } from './DataTable.fixtures';
import DataTable from './DataTable';

describe('components/DataTable', () => {
    test('renders correctly', () => {
        const rows = generateDataTableRows(10);

        render(<DataTable<IDataTableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
