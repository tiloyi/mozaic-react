import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

describe('components/Breadcrumbs', () => {
    test('renders correctly', () => {
        render(<Breadcrumbs>Test</Breadcrumbs>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
