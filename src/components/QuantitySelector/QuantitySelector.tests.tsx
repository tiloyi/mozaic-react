import React from 'react';
import { render, screen } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';

describe('components/QuantitySelector', () => {
    test('renders correctly', () => {
        render(<QuantitySelector>Test</QuantitySelector>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
