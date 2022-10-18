import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionCard from './OptionCard';

describe('components/OptionCard', () => {
    test('renders children correctly', () => {
        render(<OptionCard>Option card label</OptionCard>);

        expect(screen.getByText('Option card label')).toBeInTheDocument();
    });

    test('renders as checked radio correctly', () => {
        render(<OptionCard isChecked>Option card label</OptionCard>);

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders as checked checkbox correctly', () => {
        render(
            <OptionCard isChecked type="checkbox">
                Option card label
            </OptionCard>
        );

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('renders as unchecked radio correctly', () => {
        render(<OptionCard isChecked={false}>Option card label</OptionCard>);

        expect(screen.getByRole('radio')).not.toBeChecked();
    });

    test('renders as disabled radio correctly', () => {
        render(<OptionCard isDisabled>Option card label</OptionCard>);

        expect(screen.getByRole('radio')).toBeDisabled();
    });

    test('renders as disabled checkbox correctly', () => {
        render(
            <OptionCard isDisabled type="checkbox">
                Option card label
            </OptionCard>
        );

        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});
