import React from 'react';
import { render, screen } from '@testing-library/react';
import { TabsLink, TabsPanel, TabsButton } from './partials';
import { TabsContextProvider as Tabs } from './TabsContext';
import TabsList, { getAlignModifier, getShadowModifier, getThemeModifier, getWidthModifier } from './TabsList';

describe('components/Tabs', () => {
    describe('TabsList', () => {
        test('renders correctly with default props', () => {
            render(<TabsList>tabs</TabsList>);

            expect(screen.getByRole('navigation')).toBeInTheDocument();
            expect(screen.getByRole('tablist')).toBeInTheDocument();
            expect(screen.getByText('tabs')).toBeInTheDocument();
        });

        test('renders correctly with align="center"', () => {
            render(<TabsList align="center">tabs</TabsList>);

            expect(screen.getByRole('navigation')).toHaveClass(getAlignModifier('center'));
        });

        test('renders correctly with align="end"', () => {
            render(<TabsList align="end">tabs</TabsList>);

            expect(screen.getByRole('navigation')).toHaveClass(getAlignModifier('end'));
        });

        test('renders correctly with theme="primary-01"', () => {
            render(<TabsList theme="primary-02">tabs</TabsList>);

            expect(screen.getByRole('navigation')).toHaveClass(getThemeModifier('primary-02'));
        });

        test('renders correctly with width="full"', () => {
            render(<TabsList width="full">tabs</TabsList>);

            expect(screen.getByRole('navigation')).toHaveClass(getWidthModifier('full'));
        });

        test('renders correctly without shadow', () => {
            render(<TabsList hasShadow={false}>tabs</TabsList>);

            expect(screen.getByRole('navigation')).toHaveClass(getShadowModifier(false));
        });
    });

    describe('TabsLink', () => {});

    describe('TabsButton', () => {});

    describe('TabsPanel', () => {});

    describe('Tabs', () => {});
});
