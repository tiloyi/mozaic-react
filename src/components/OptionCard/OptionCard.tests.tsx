import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionCard from './OptionCard';

describe('components/OptionCard', () => {
    test('renders children correctly', () => {
        render(<OptionCard>Option card label</OptionCard>);

        expect(screen.getByText('Option card label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <OptionCard isChecked onChange={onChange}>
                Option card label
            </OptionCard>
        );

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <OptionCard isChecked={false} onChange={onChange}>
                Option card label
            </OptionCard>
        );

        expect(screen.getByRole('radio')).not.toBeChecked();
    });
});
