import React from 'react';
import { render, screen } from '@testing-library/react';
import TextTag from './TextTag';
import LinkTag from './LinkTag';
import SelectableTag from './SelectableTag';
import RemovableTag from './RemovableTag';
import { sizes, themes } from './Tag.types';

describe('components/Tag', () => {
    describe('TextTag', () => {});

    describe('LinkTag', () => {});

    describe('SelectableTag', () => {});

    describe('RemovableTag', () => {});
    // test.each(types)('renders as `%s` type correctly with default size', tag => {
    //     render(<Tag type={tag}>tag</Tag>);
    //     expect(screen.getByTestId('tag-wrapper')).toHaveClass(`mc-tag-${tag} mc-tag-${tag}--m`);
    // });
    // test.each(types)('renders as `%s` type correctly with s size', tag => {
    //     render(
    //         <Tag size="s" type={tag}>
    //             tag
    //         </Tag>
    //     );
    //     expect(screen.getByTestId('tag-wrapper')).toHaveClass(`mc-tag-${tag} mc-tag-${tag}--s`);
    // });
    // test.each(types)('renders as `%s` type correctly with dark theme', tag => {
    //     render(
    //         <Tag theme="dark" type={tag}>
    //             tag
    //         </Tag>
    //     );
    //     expect(screen.getByTestId('tag-wrapper')).toHaveClass(`mc-tag-${tag} mc-tag-${tag}--m mc-tag-${tag}--dark`);
    // });
    // test.each(sizes)('renders as `%s` size correctly with default text type', size => {
    //     render(<Tag size={size}>tag</Tag>);
    //     expect(screen.getByTestId('tag-wrapper')).toHaveClass(`mc-tag-text mc-tag-text--${size}`);
    // });
    // test.each(sizes)('renders as `%s` size correctly with default text type', size => {
    //     render(<Tag size={size}>tag</Tag>);
    //     expect(screen.getByTestId('tag-wrapper')).toHaveClass(`mc-tag-text mc-tag-text--${size}`);
    // });
    // test.each(sizes)('renders as `%s` size correctly with default removable type', size => {
    //     render(
    //         <Tag type="removable" size={size}>
    //             tag
    //         </Tag>
    //     );
    //     expect(screen.getByTestId('tag-wrapper')).toHaveClass(`mc-tag-removable mc-tag-removable--${size}`);
    // });
});
