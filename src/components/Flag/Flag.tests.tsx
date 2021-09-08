import React from 'react';
import { render, screen } from '@testing-library/react';
import Flag from './Flag';

describe('components/Flag', () => {
    test('renders correctly', () => {
        render(<Flag>Flag</Flag>);

        expect(screen.getByText('Flag')).toBeInTheDocument();
    });
});
