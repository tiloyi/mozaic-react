import React from 'react';
import { render, screen } from '@testing-library/react';
import Flag from './Flag';

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
            <Flag theme="primary-02" variant="solid">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-primary-02');
    });

    test('renders with "primary-02" theme and "bordered" variant', () => {
        render(
            <Flag theme="primary-02" variant="bordered">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-primary-02');
    });

    test('renders with "danger" theme and "solid" variant', () => {
        render(
            <Flag theme="danger" variant="solid">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-danger');
    });

    test('renders with "danger" theme and "bordered" variant', () => {
        render(
            <Flag theme="danger" variant="bordered">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-danger');
    });

    test('renders with "dark" theme and "solid" variant', () => {
        render(
            <Flag theme="dark" variant="solid">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-dark');
    });

    test('renders with "dark" theme and "bordered" variant', () => {
        render(
            <Flag theme="dark" variant="bordered">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-dark');
    });

    test('renders with "light" theme and "solid" variant', () => {
        render(
            <Flag theme="light" variant="solid">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--solid-light');
    });

    test('renders with "light" theme and "bordered" variant', () => {
        render(
            <Flag theme="light" variant="bordered">
                Text
            </Flag>
        );

        expect(screen.getByText('Text')).toHaveClass('mc-flag--bordered-light');
    });
});
