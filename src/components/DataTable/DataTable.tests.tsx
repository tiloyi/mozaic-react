import React from 'react';
import { render, screen } from '@testing-library/react';
import { generateDataTableRows, columns, getRowKey } from './DataTable.fixtures';
import { IDataTableFixture } from './DataTable.types';
import DataTable from './DataTable';

describe('components/DataTable', () => {
    test.skip('renders correctly', () => {
        const rows = generateDataTableRows(10);

        render(<DataTable<IDataTableFixture> columns={columns} rows={rows} getRowKey={getRowKey} />);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
