import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('components/Table', () => {
    test('renders correctly', () => {
        render(<Table>Test</Table>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
