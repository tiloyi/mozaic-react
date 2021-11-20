import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('components/Link', () => {
    test('renders correctly', () => {
        render(<Link>Test</Link>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
