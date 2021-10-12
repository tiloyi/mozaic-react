import React from 'react';
import { render, screen } from '@testing-library/react';

import Tags from './Tags';
import TagText from './partials/TagText';
import TagLink from './partials/TagLink';
import TagRemovable from './partials/TagRemovable';
import TagSelectable from './partials/TagSelectable';

import { classNames } from './constants';

const TEST_ID = '123';
const SECOND_TEST_ID = '124';
const TEST_TEXT = 'Test text';
const SECOND_TEST_TEXT = 'Test text 2';
const TEST_LINK = 'http://google.com';
const TEST_JSX_DATA_ID = 'test-jsx-text';

const TestJsx = () => <div data-testid={TEST_JSX_DATA_ID}>Test JSX</div>;

describe('components/Tags', () => {
    test('Tags render list of tags', () => {
        render(
            <Tags
                tags={[
                    {
                        id: TEST_ID,
                        tagData: {
                            type: 'text',
                            text: TEST_TEXT
                        }
                    },
                    {
                        id: SECOND_TEST_ID,
                        tagData: {
                            type: 'text',
                            text: SECOND_TEST_TEXT
                        }
                    }
                ]}
            />
        );

        const textProperty = screen.getByText(TEST_TEXT);
        const secondTextProperty = screen.getByText(SECOND_TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
        expect(secondTextProperty).toBeInTheDocument();
    });

    test('partial/Text renders', () => {
        render(<TagText id="test" text={TEST_TEXT} />);

        const textProperty = screen.getByText(TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
    });

    test('partial/Links renders', () => {
        render(<TagLink id="test" link={TEST_LINK} text={TEST_TEXT} />);

        const textProperty = screen.getByText(TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
    });

    test('partial/Removable renders', () => {
        render(<TagRemovable id="test" text={TEST_TEXT} />);

        const textProperty = screen.getByText(TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
    });

    test('partial/Selectable renders', () => {
        render(<TagSelectable id="test" text={TEST_TEXT} />);

        const textProperty = screen.getByText(TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
    });

    test('partial/Text replace text with content', () => {
        render(<TagText id="test" text="Test JSX wouldnt render" content={<TestJsx />} />);

        const TestJSXElement = screen.getByTestId(TEST_JSX_DATA_ID);

        expect(TestJSXElement).toBeInTheDocument();
    });
});
