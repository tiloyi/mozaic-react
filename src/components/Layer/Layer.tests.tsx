import React from 'react';
import { render, screen } from '@testing-library/react';
import Layer from './Layer';

describe('components/Layer', () => {
    test('renders correctly', () => {
        render(<Layer>Test</Layer>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
