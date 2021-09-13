import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBox from './CheckBox';

describe('components/CheckBox', () => {
    test('renders children correctly', () => {
        render(<CheckBox>Check box label</CheckBox>);

        expect(screen.getByText('Check box label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <CheckBox isChecked onChange={onChange}>
                Check box label
            </CheckBox>
        );

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <CheckBox isChecked={false} onChange={onChange}>
                Check box label
            </CheckBox>
        );

        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('renders disabled correctly', () => {
        render(<CheckBox isDisabled>Disabled check box label</CheckBox>);

        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    test('renders invalid correctly', () => {
        render(<CheckBox isInvalid>Invalid check box label</CheckBox>);

        expect(screen.getByRole('checkbox')).toHaveClass('is-invalid');
    });

    test('renders indeterminate correctly', () => {
        render(<CheckBox isInvalid>Invalid check box label</CheckBox>);

        expect(screen.getByRole('checkbox')).toHaveClass('is-invalid');
    });
});
