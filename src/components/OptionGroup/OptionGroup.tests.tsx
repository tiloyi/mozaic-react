import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OptionButton } from '../OptionButton';
import { OptionCard } from '../OptionCard';
import OptionGroup from './OptionGroup';
import { IOptionGroupProps } from './OptionGroup.types';
import { languages } from './OptionGroup.fixtures';

describe('components/OptionGroup', () => {
    describe('With OptionButton', () => {
        const setup = (props: Partial<IOptionGroupProps>): RenderResult =>
            render(
                <OptionGroup name="languages" {...props}>
                    {languages.map(language => (
                        <OptionButton key={language} value={language}>
                            {language}
                        </OptionButton>
                    ))}
                </OptionGroup>
            );

        test('renders checked item in single mode', () => {
            setup({ value: languages[2], mode: 'single' });

            expect(screen.getByRole('radio', { name: languages[2] })).toBeChecked();
        });

        test('renders checked items in multi mode', () => {
            setup({ values: [languages[0], languages[2]], mode: 'multi' });

            expect(screen.getByRole('checkbox', { name: languages[0] })).toBeChecked();
            expect(screen.getByRole('checkbox', { name: languages[2] })).toBeChecked();
        });
    });

    describe('With OptionCard', () => {
        const setup = (props: Partial<IOptionGroupProps>): RenderResult =>
            render(
                <OptionGroup name="languages" {...props}>
                    {languages.map(language => (
                        <OptionCard key={language} value={language}>
                            {language}
                        </OptionCard>
                    ))}
                </OptionGroup>
            );

        test('renders checked item in single mode', () => {
            setup({ value: languages[2], mode: 'single' });

            expect(screen.getByRole('radio', { name: languages[2] })).toBeChecked();
        });

        test('renders checked items in multi mode', () => {
            setup({ values: [languages[0], languages[2]], mode: 'multi' });

            expect(screen.getByRole('checkbox', { name: languages[0] })).toBeChecked();
            expect(screen.getByRole('checkbox', { name: languages[2] })).toBeChecked();
        });
    });
});
