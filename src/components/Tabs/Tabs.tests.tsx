import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    describe('TabsLink', () => {
        test('renders correctly with default props', () => {
            render(<TabsLink>tab</TabsLink>);

            expect(screen.getByRole('tab')).toHaveClass('mc-tabs__link');
            expect(screen.getByRole('tab')).toHaveTextContent('tab');
        });

        test('renders correctly with disabled state', () => {
            render(<TabsLink isDisabled>tab</TabsLink>);

            expect(screen.getByRole('tab')).toHaveClass('mc-tabs__link--disabled');
        });

        test('renders correctly with selected state', () => {
            render(<TabsLink isSelected>tab</TabsLink>);

            expect(screen.getByRole('tab')).toHaveClass('mc-tabs__link--selected');
        });
    });

    describe('TabsButton', () => {
        test('renders correctly with default props', () => {
            render(<TabsButton>tab</TabsButton>);

            expect(screen.getByRole('tab')).toHaveClass('mc-tabs__link');
            expect(screen.getByRole('tab')).toHaveTextContent('tab');
        });

        test('renders correctly with disabled state', () => {
            render(<TabsButton isDisabled>tab</TabsButton>);

            expect(screen.getByRole('tab')).toHaveClass('mc-tabs__link--disabled');
        });

        test('renders correctly with selected state', () => {
            render(<TabsButton isSelected>tab</TabsButton>);

            expect(screen.getByRole('tab')).toHaveClass('mc-tabs__link--selected');
        });

        test('call onClick callback', () => {
            const onClick = jest.fn();

            render(<TabsButton onClick={onClick}>tab</TabsButton>);

            userEvent.click(screen.getByRole('tab', { name: 'tab' }));

            expect(onClick).toBeCalledTimes(1);
        });
    });

    describe('Tabs', () => {
        test('renders selected tab', () => {
            render(
                <Tabs defaultTab="tab1">
                    <TabsList>
                        <TabsButton tab="tab1">tab 1</TabsButton>
                        <TabsButton tab="tab2">tab 2</TabsButton>
                    </TabsList>
                    <TabsPanel tab="tab1">Panel 1</TabsPanel>
                    <TabsPanel tab="tab2">Panel 2</TabsPanel>
                </Tabs>
            );

            expect(screen.getByRole('tab', { name: 'tab 1' })).toHaveClass('mc-tabs__link--selected');
            expect(screen.getByText('Panel 1')).not.toHaveAttribute('hidden', '');

            expect(screen.getByRole('tab', { name: 'tab 2' })).not.toHaveClass('mc-tabs__link--selected');
            expect(screen.getByText('Panel 2')).toHaveAttribute('hidden', '');

            userEvent.click(screen.getByRole('tab', { name: 'tab 2' }));

            expect(screen.getByRole('tab', { name: 'tab 1' })).not.toHaveClass('mc-tabs__link--selected');
            expect(screen.getByText('Panel 1')).toHaveAttribute('hidden', '');

            expect(screen.getByRole('tab', { name: 'tab 2' })).toHaveClass('mc-tabs__link--selected');
            expect(screen.getByText('Panel 2')).not.toHaveAttribute('hidden', '');
        });
    });
});
