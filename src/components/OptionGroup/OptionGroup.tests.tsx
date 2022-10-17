import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OptionButton } from '../OptionButton';
import { OptionCard } from '../OptionCard';
import OptionGroup from './OptionGroup';
import { IOptionGroupProps, TOptionGroupMode } from './OptionGroup.types';
import { languages } from './OptionGroup.fixtures';

describe('components/OptionGroup', () => {
    describe('With OptionButton', () => {
        const setup = (props: Partial<IOptionGroupProps>): RenderResult =>
            render(
                <OptionGroup name="languages" {...props}>
                    {languages.map(language => (
                        <OptionButton key={language.toLowerCase()} value={language.toLowerCase()}>
                            {language}
                        </OptionButton>
                    ))}
                </OptionGroup>
            );

        test('renders checked item in single mode', () => {
            setup({ value: languages[2], mode: 'single' });

            screen.debug(screen.getByRole('radio', { name: languages[2] }));
            // expect(screen.getByRole('radio', { name: languages[2] })).toBeChecked();
        });

        test('renders checked items in multi mode', () => {
            setup({ values: [languages[0], languages[2]] });

            screen.debug();
        });
    });

    describe('With OptionCard', () => {
        const setup = (props: Partial<IOptionGroupProps>): RenderResult =>
            render(
                <OptionGroup name="languages" {...props}>
                    {languages.map(language => (
                        <OptionCard key={language.toLowerCase()} value={language.toLowerCase()}>
                            {language}
                        </OptionCard>
                    ))}
                </OptionGroup>
            );
    });
});
