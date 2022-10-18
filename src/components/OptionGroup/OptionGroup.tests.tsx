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

        test('checks button in single mode', async () => {
            const onChange = jest.fn();

            setup({ value: languages[2], mode: 'single', onChange });

            expect(screen.getByRole('radio', { name: languages[2] })).toBeChecked();

            await userEvent.click(screen.getByLabelText(languages[1]));

            expect(onChange).toHaveBeenCalledWith(languages[1]);

            await userEvent.click(screen.getByLabelText(languages[3]));

            expect(onChange).toHaveBeenCalledWith(languages[3]);
        });

        test('checks button in multi mode', async () => {
            const onChange = jest.fn();

            setup({ values: [languages[0], languages[2]], mode: 'multi', onChange });

            expect(screen.getByRole('checkbox', { name: languages[0] })).toBeChecked();
            expect(screen.getByRole('checkbox', { name: languages[2] })).toBeChecked();

            await userEvent.click(screen.getByLabelText(languages[1]));

            expect(onChange).toHaveBeenCalledWith(languages[1]);

            await userEvent.click(screen.getByLabelText(languages[2]));

            expect(onChange).toHaveBeenCalledWith(languages[2]);
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

        test('checks card in single mode', async () => {
            const onChange = jest.fn();

            setup({ value: languages[2], mode: 'single', onChange });

            expect(screen.getByRole('radio', { name: languages[2] })).toBeChecked();

            await userEvent.click(screen.getByLabelText(languages[1]));

            expect(onChange).toHaveBeenCalledWith(languages[1]);

            await userEvent.click(screen.getByLabelText(languages[3]));

            expect(onChange).toHaveBeenCalledWith(languages[3]);
        });

        test('checks card in multi mode', async () => {
            const onChange = jest.fn();

            setup({ values: [languages[0], languages[2]], mode: 'multi', onChange });

            expect(screen.getByRole('checkbox', { name: languages[0] })).toBeChecked();
            expect(screen.getByRole('checkbox', { name: languages[2] })).toBeChecked();

            await userEvent.click(screen.getByLabelText(languages[1]));

            expect(onChange).toHaveBeenCalledWith(languages[1]);

            await userEvent.click(screen.getByLabelText(languages[2]));

            expect(onChange).toHaveBeenCalledWith(languages[2]);
        });
    });
});
