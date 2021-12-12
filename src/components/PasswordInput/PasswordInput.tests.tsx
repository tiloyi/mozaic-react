import React from 'react';
import { render, screen } from '@testing-library/react';
import PasswordInput from './PasswordInput';
import userEvent from '@testing-library/user-event';

describe('components/PasswordInput', () => {
    test('renders correctly', () => {
        render(<PasswordInput defaultValue="password" />);

        expect(screen.getByDisplayValue('password')).toHaveAttribute('type', 'password');
    });

    test('toggles input type', () => {
        render(<PasswordInput defaultValue="password" />);

        userEvent.click(screen.getByRole('button', { name: 'Show' }));

        expect(screen.getByDisplayValue('password')).toHaveAttribute('type', 'text');

        userEvent.click(screen.getByRole('button', { name: 'Hide' }));

        expect(screen.getByDisplayValue('password')).toHaveAttribute('type', 'password');
    });

    test('renders disabled correctly', () => {
        render(<PasswordInput defaultValue="password" isDisabled />);

        expect(screen.getByDisplayValue('password')).toBeDisabled();
    });
});
