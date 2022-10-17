import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionCard from './OptionCard';

describe('components/OptionCard', () => {
    test('renders children correctly', () => {
        render(<OptionCard>Option button label</OptionCard>);

        expect(screen.getByText('Option button label')).toBeInTheDocument();
    });

    test('renders as checked radio correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionCard isChecked onClick={onClick}>
                Option button label
            </OptionCard>
        );

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders as checked checkbox correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionCard isChecked type="checkbox" onClick={onClick}>
                Option button label
            </OptionCard>
        );

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('renders as unchecked radio correctly', () => {
        const onClick = jest.fn();

        render(
            <OptionCard isChecked={false} onClick={onClick}>
                Option button label
            </OptionCard>
        );

        expect(screen.getByRole('radio')).not.toBeChecked();
    });

    test('renders as disabled radio correctly', () => {
        render(<OptionCard isDisabled>Option button label</OptionCard>);

        expect(screen.getByRole('radio')).toBeDisabled();
    });

    test('renders as disabled checkbox correctly', () => {
        render(
            <OptionCard isDisabled type="checkbox">
                Option button label
            </OptionCard>
        );

        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});
