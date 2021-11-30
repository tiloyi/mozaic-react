import React from 'react';
import { render, screen } from '@testing-library/react';
import { BreadcrumbsItem } from './partials';
import Breadcrumbs from './Breadcrumbs';
import { getResponsiveModifier, getThemeModifier } from './partials/Container';

describe('components/Breadcrumbs', () => {
    test('renders correctly', () => {
        render(
            <Breadcrumbs>
                <BreadcrumbsItem>Level 00</BreadcrumbsItem>
            </Breadcrumbs>
        );

        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    test('renders correctly with dark theme', () => {
        render(
            <Breadcrumbs theme="dark">
                <BreadcrumbsItem>Level 00</BreadcrumbsItem>
            </Breadcrumbs>
        );

        expect(screen.getByRole('navigation')).toHaveClass(getThemeModifier('dark'));
    });

    test('renders with current page', () => {
        render(
            <Breadcrumbs>
                <BreadcrumbsItem>Level 00</BreadcrumbsItem>
                <BreadcrumbsItem isCurrent>Level 01</BreadcrumbsItem>
            </Breadcrumbs>
        );

        expect(screen.getByText('Level 01')).toHaveAttribute('aria-current', 'page');
    });

    test('renders responsive correctly', () => {
        render(
            <Breadcrumbs isResponsive>
                <BreadcrumbsItem isActive>Level 00</BreadcrumbsItem>
            </Breadcrumbs>
        );

        expect(screen.getByRole('navigation')).toHaveClass(getResponsiveModifier(true));
        expect(screen.getByRole('listitem')).toHaveClass('is-active');
    });
});
