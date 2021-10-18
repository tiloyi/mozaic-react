import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Tabs from './Tabs';
import { TabType } from './Tabs.types';

const TEST_LINK = 'http://google.com';

describe('components/Tabs', () => {
    test('renders Button type', () => {
        render(
            <Tabs
                name="test tabs"
                type={TabType.Button}
                tabs={[
                    {
                        content: '123'
                    }
                ]}
                selectedTab={0}
            />
        );

        const buttonTab = screen.getByRole('tab');
        expect(buttonTab).toBeInTheDocument();
    });

    test('renders Link type with specified link', () => {
        render(
            <Tabs
                name="test tabs"
                type={TabType.Link}
                tabs={[
                    {
                        link: TEST_LINK,
                        content: '123'
                    }
                ]}
                selectedTab={0}
            />
        );

        const anchorTab = screen.getByRole('tab');
        expect(anchorTab).toHaveAttribute('href', TEST_LINK);
    });

    test('onSelectTab works', () => {
        let value: string = '';

        render(
            <Tabs
                onSelectTab={() => {
                    value = 'ok';
                }}
                name="test tabs"
                type={TabType.Button}
                tabs={[
                    {
                        content: '123'
                    }
                ]}
                selectedTab={0}
            />
        );

        const buttonTab = screen.getByRole('tab');
        expect(buttonTab).toBeInTheDocument();

        act(() => {
            fireEvent.click(buttonTab);
        });

        expect(value).toBe('ok');
    });

    test('initial tab selected works', () => {
        const initialTabSelected = 1;
        render(
            <Tabs
                name="test tabs"
                type={TabType.Button}
                tabs={[
                    {
                        content: '123'
                    },
                    {
                        content: '456'
                    }
                ]}
                selectedTab={initialTabSelected}
            />
        );

        const buttonTab = screen.getAllByRole('tab');
        expect(buttonTab[initialTabSelected]).toHaveAttribute('aria-selected', 'true');
    });
});
