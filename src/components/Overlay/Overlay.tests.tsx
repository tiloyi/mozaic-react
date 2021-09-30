import React from 'react';
import { render, screen } from '@testing-library/react';
import Overlay from './Overlay';

describe('components/Overlay', () => {
    test('renders correctly', () => {
        render(<Overlay>Test</Overlay>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
