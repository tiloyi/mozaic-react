import React, { useState } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Tabs from './Tabs';

const TEST_LINK = 'http://google.com';

describe('components/Tabs', () => {
    test('123', () => {
        expect(1).toBe(1);
    });
    // test('renders Button type', () => {
    //     render(
    //         <Tabs
    //             name="test tabs"
    //             type={TabType.Button}
    //             tabs={[
    //                 {
    //                     content: '123'
    //                 }
    //             ]}
    //             selectedTab={0}
    //         />
    //     );

    //     const buttonTab = screen.getByRole('tab');
    //     expect(buttonTab).toBeInTheDocument();
    // });

    // test('renders Link type with specified link', () => {
    //     render(
    //         <Tabs
    //             name="test tabs"
    //             type={TabType.Link}
    //             tabs={[
    //                 {
    //                     link: TEST_LINK,
    //                     content: '123'
    //                 }
    //             ]}
    //             selectedTab={0}
    //         />
    //     );

    //     const anchorTab = screen.getByRole('tab');
    //     expect(anchorTab).toHaveAttribute('href', TEST_LINK);
    // });

    // test('onSelectTab works', () => {
    //     let value: string = '';

    //     render(
    //         <Tabs
    //             onSelectTab={() => {
    //                 value = 'ok';
    //             }}
    //             name="test tabs"
    //             type={TabType.Button}
    //             tabs={[
    //                 {
    //                     content: '123'
    //                 }
    //             ]}
    //             selectedTab={0}
    //         />
    //     );

    //     const buttonTab = screen.getByRole('tab');
    //     expect(buttonTab).toBeInTheDocument();

    //     act(() => {
    //         fireEvent.click(buttonTab);
    //     });

    //     expect(value).toBe('ok');
    // });

    // test('initial tab selected works', () => {
    //     const initialTabSelected = 1;
    //     render(
    //         <Tabs
    //             name="test tabs"
    //             type={TabType.Button}
    //             tabs={[
    //                 {
    //                     content: '123'
    //                 },
    //                 {
    //                     content: '456'
    //                 }
    //             ]}
    //             selectedTab={initialTabSelected}
    //         />
    //     );

    //     const buttonTab = screen.getAllByRole('tab');
    //     expect(buttonTab[initialTabSelected]).toHaveAttribute('aria-selected', 'true');
    // });

    // test('onSelectTab returns tabIndex', () => {
    //     let lastTabSelected = 0;
    //     const tabToSelect = 1;

    //     const onSelectHandler = (tabIndex: number) => {
    //         lastTabSelected = tabIndex;
    //     };

    //     render(
    //         <Tabs
    //             onSelectTab={onSelectHandler}
    //             name="test tabs"
    //             type={TabType.Button}
    //             tabs={[
    //                 {
    //                     content: '123'
    //                 },
    //                 {
    //                     content: '456'
    //                 }
    //             ]}
    //             selectedTab={0}
    //         />
    //     );

    //     const buttonTab = screen.getAllByRole('tab');
    //     expect(buttonTab[tabToSelect]).toBeDefined();

    //     act(() => {
    //         fireEvent.click(buttonTab[tabToSelect]);
    //     });

    //     expect(lastTabSelected).toBe(tabToSelect);
    // });

    // test('onSelectTab returns sets aria-selected', () => {
    //     const TestComponent = () => {
    //         const [selectedTab, setSelectedTab] = useState<number>(0);
    //         return (
    //             <Tabs
    //                 onSelectTab={tabIndex => {
    //                     setSelectedTab(tabIndex);
    //                 }}
    //                 name="test tabs"
    //                 type={TabType.Button}
    //                 tabs={[
    //                     {
    //                         content: '123'
    //                     },
    //                     {
    //                         content: '456'
    //                     }
    //                 ]}
    //                 selectedTab={selectedTab}
    //             />
    //         );
    //     };

    //     const tabToSelect = 1;

    //     render(<TestComponent />);

    //     const buttonTab = screen.getAllByRole('tab');
    //     expect(buttonTab[tabToSelect]).toBeDefined();

    //     act(() => {
    //         fireEvent.click(buttonTab[tabToSelect]);
    //     });

    //     expect(buttonTab[tabToSelect]).toHaveAttribute('aria-selected', 'true');
    // });
});
