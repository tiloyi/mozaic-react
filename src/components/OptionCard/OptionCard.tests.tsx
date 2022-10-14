import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionCard from './OptionCard';

describe('components/OptionCard', () => {
    test('renders children correctly', () => {
        render(<OptionCard>Option card label</OptionCard>);

        expect(screen.getByText('Option card label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionCard isChecked onClick={onClick}>
                Option card label
            </OptionCard>
        );

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionCard isChecked={false} onClick={onClick}>
                Option card label
            </OptionCard>
        );

        expect(screen.getByRole('radio')).not.toBeChecked();
    });
});
