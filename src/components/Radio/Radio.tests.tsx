import React from 'react';
import { render, screen } from '@testing-library/react';
import Radio from './Radio';

describe('components/Radio', () => {
    test('renders children correctly', () => {
        render(<Radio>Radio label</Radio>);

        expect(screen.getByText('Radio label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <Radio isChecked onChange={onChange}>
                Radio label
            </Radio>
        );

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <Radio isChecked={false} onChange={onChange}>
                Radio
            </Radio>
        );

        expect(screen.getByRole('radio')).not.toBeChecked();
    });

    test('renders invalid correctly', () => {
        render(<Radio isInvalid>Invalid radio label</Radio>);

        expect(screen.getByRole('radio')).toHaveClass('is-invalid');
    });
});
