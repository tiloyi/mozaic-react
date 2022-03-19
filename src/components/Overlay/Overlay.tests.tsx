import React from 'react';
import { render, screen } from '@testing-library/react';
import Overlay from './Overlay';

describe('components/Overlay', () => {
    test('renders visible correctly', () => {
        render(<Overlay isVisible>Test</Overlay>);

        expect(screen.getByRole('dialog')).toHaveClass('is-visible');
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('renders invisible', () => {
        render(<Overlay isVisible={false}>Test</Overlay>);

        expect(screen.getByRole('dialog')).not.toHaveClass('is-visible');
        expect(screen.queryByText('Test')).not.toBeInTheDocument();
    });
});
