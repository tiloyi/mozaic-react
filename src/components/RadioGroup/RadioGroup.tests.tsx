import React, { ChangeEvent } from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '../Radio';
import RadioGroup from './RadioGroup';
import { languages } from './RadioGroup.fixtures';

const setup = (value: string, onChange?: (event: ChangeEvent<HTMLInputElement>) => void): RenderResult =>
    render(
        <RadioGroup name="languages" value={value} onChange={onChange}>
            {languages.map(language => (
                <Radio className="radio-group-item" key={language.toLowerCase()} value={language.toLowerCase()}>
                    {language}
                </Radio>
            ))}
        </RadioGroup>
    );

describe('components/RadioGroup', () => {
    test('renders with checked radio', () => {
        setup(languages[0].toLowerCase());

        expect(screen.getByLabelText(languages[0])).toBeChecked();
    });

    test('calls onChange callback', async () => {
        const onChange = jest.fn();

        setup(languages[0].toLowerCase(), onChange);

        await userEvent.click(screen.getByLabelText(languages[1]));

        expect(onChange).toBeCalledTimes(1);
    });
});
