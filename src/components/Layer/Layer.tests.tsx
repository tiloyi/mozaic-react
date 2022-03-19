import React from 'react';
import { render, screen } from '@testing-library/react';
import Layer from './Layer';

describe('components/Layer', () => {
    test.skip('renders correctly', () => {
        render(<Layer id="layer">Test</Layer>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
