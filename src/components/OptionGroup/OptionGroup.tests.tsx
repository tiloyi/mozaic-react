import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionButton from '../OptionButton';
import OptionGroup from './OptionGroup';
import { languages } from './OptionGroup.fixtures';

const setup = (value: string, onClick: (value?: string) => void): RenderResult =>
    render(
        <OptionGroup name="languages" value={value} onClick={onClick}>
            {languages.map(language => (
                <OptionButton key={language.toLowerCase()} value={language.toLowerCase()}>
                    {language}
                </OptionButton>
            ))}
        </OptionGroup>
    );

describe('components/OptionGroup', () => {
    test('renders with checked Option button', () => {
        const onClick = jest.fn();

        setup(languages[0].toLowerCase(), onClick);

        expect(screen.getByLabelText(languages[0])).toBeChecked();
    });

    test('calls onChange callback', async () => {
        const onClick = jest.fn();

        setup(languages[0].toLowerCase(), onClick);

        await userEvent.click(screen.getByLabelText(languages[1]));

        expect(onClick).toBeCalledTimes(1);
    });
});
