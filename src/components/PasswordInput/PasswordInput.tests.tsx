import React from 'react';
import { render, screen } from '@testing-library/react';
import PasswordInput from './PasswordInput';

describe('components/PasswordInput', () => {
    test('renders correctly', () => {
        render(<PasswordInput>Test</PasswordInput>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
