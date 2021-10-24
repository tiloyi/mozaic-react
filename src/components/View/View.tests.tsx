import React from 'react';
import { render, screen } from '@testing-library/react';
import View from './View';

describe('components/View', () => {
    test('renders correctly', () => {
        render(<View>Test</View>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
