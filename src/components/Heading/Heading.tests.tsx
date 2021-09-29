import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('components/Heading', () => {
    test('renders correctly', () => {
        render(<Heading>Test</Heading>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
