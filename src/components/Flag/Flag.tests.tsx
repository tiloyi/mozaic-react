import React from 'react';
import { render, screen } from '@testing-library/react';
import Flag from './Flag';
import { FlagTheme, FlagVariant } from './Flag.types';

describe('components/Flag', () => {
    test('renders children correctly', () => {
        render(<Flag>Text</Flag>);

        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    test('treats default theme as "primary", treats default variant as "solid"', () => {
        render(<Flag>Text</Flag>);

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid');
    });

    test('renders with "primary-02" theme and "solid" variant', () => {
        render(
            <Flag theme={FlagTheme.Primary02} variant={FlagVariant.Solid}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-primary-02');
    });

    test('renders with "primary-02" theme and "bordered" variant', () => {
        render(
            <Flag theme={FlagTheme.Primary02} variant={FlagVariant.Bordered}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-primary-02');
    });

    test('renders with "danger" theme and "solid" variant', () => {
        render(
            <Flag theme={FlagTheme.Danger} variant={FlagVariant.Solid}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-danger');
    });

    test('renders with "danger" theme and "bordered" variant', () => {
        render(
            <Flag theme={FlagTheme.Danger} variant={FlagVariant.Bordered}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-danger');
    });

    test('renders with "dark" theme and "solid" variant', () => {
        render(
            <Flag theme={FlagTheme.Dark} variant={FlagVariant.Solid}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-dark');
    });

    test('renders with "dark" theme and "bordered" variant', () => {
        render(
            <Flag theme={FlagTheme.Dark} variant={FlagVariant.Bordered}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-dark');
    });

    test('renders with "light" theme and "solid" variant', () => {
        render(
            <Flag theme={FlagTheme.Light} variant={FlagVariant.Solid}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-light');
    });

    test('renders with "light" theme and "bordered" variant', () => {
        render(
            <Flag theme={FlagTheme.Light} variant={FlagVariant.Bordered}>
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-light');
    });
});
