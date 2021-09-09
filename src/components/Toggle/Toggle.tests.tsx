import React from 'react';
import { render, screen } from '@testing-library/react';
import Toggle from './Toggle';

describe('components/Toggle', () => {
    test('renders children correctly', () => {
        render(<Toggle>Toggle label</Toggle>);

        expect(screen.getByText('Toggle label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <Toggle isChecked onChange={onChange}>
                Toggle label
            </Toggle>
        );

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <Toggle isChecked={false} onChange={onChange}>
                Toggle label
            </Toggle>
        );

        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });
});
