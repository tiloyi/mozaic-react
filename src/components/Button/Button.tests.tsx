import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('components/Button', () => {
    test('renders correctly', () => {
        render(<Button>Click!</Button>);

        expect(screen.getByText('Click!')).toBeInTheDocument();
    });
});
