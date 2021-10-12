import React from 'react';
import { render, screen, act } from '@testing-library/react';

import Tags from './Tags';
import TagText from './partials/TagText';
import TagLink from './partials/TagLink';
import TagRemovable from './partials/TagRemovable';
import TagSelectable from './partials/TagSelectable';

import { ITag, TagType } from './Tags.types';

const TEST_ID = '123';
const SECOND_TEST_ID = '124';
const TEST_TEXT = 'Test text';
const SECOND_TEST_TEXT = 'Test text 2';

const TEST_LINK = 'http://google.com';

const TEST_JSX_DATA_ID = 'test-jsx-text';
const TEST_JSX_WOUDLNT_RENDER_TEXT = 'Test JSX wouldnt render';

const TestJsx = () => <div data-testid={TEST_JSX_DATA_ID}>Test JSX</div>;

describe('components/Tags', () => {
    test('Tags render list of tags', () => {
        render(
            <Tags
                tags={[
                    {
                        id: TEST_ID,
                        tagData: {
                            type: TagType.Text,
                            text: TEST_TEXT
                        }
                    },
                    {
                        id: SECOND_TEST_ID,
                        tagData: {
                            type: TagType.Text,
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

    test.each([TagType.Text, TagType.Link, TagType.Removable, TagType.Selectable] as TagType[])(
        '%s has placeholder text instead content',
        type => {
            render(
                <Tags
                    tags={[
                        {
                            id: TEST_ID,
                            tagData: {
                                type: type,
                                text: TEST_JSX_WOUDLNT_RENDER_TEXT,
                                content: <TestJsx />
                            }
                        }
                    ]}
                />
            );

            const testJsxComponent = screen.getByTestId(TEST_JSX_DATA_ID);
            expect(testJsxComponent).toBeInTheDocument();
        }
    );

    test.each([TagType.Text, TagType.Link, TagType.Removable, TagType.Selectable] as TagType[])(
        '%s has placeholder text instead content',
        async type => {
            await act(async () => {
                render(
                    <Tags
                        tags={[
                            {
                                id: TEST_ID,
                                tagData: {
                                    type: type,
                                    text: TEST_JSX_WOUDLNT_RENDER_TEXT
                                }
                            }
                        ]}
                    />
                );
            });

            const placeholderText = await screen.getByText(TEST_JSX_WOUDLNT_RENDER_TEXT);
            expect(placeholderText).toBeInTheDocument();
        }
    );
});

describe('partial/Text', () => {
    test('Text renders', () => {
        render(<TagText id="test" text={TEST_TEXT} />);

        const textProperty = screen.getByText(TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
    });
});

describe('partial/Removable', () => {
    test('Text renders', () => {
        render(<TagRemovable id="test" text={TEST_TEXT} />);

        const textProperty = screen.getByText(TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
    });
});

describe('partial/Link', () => {
    test('Text renders', () => {
        render(<TagLink id="test" link={TEST_LINK} text={TEST_TEXT} />);

        const textProperty = screen.getByText(TEST_TEXT);

        expect(textProperty).toBeInTheDocument();
    });
});
