import React, { ChangeEvent } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '../Radio';
import RadioGroup from './RadioGroup';
import { languages } from './RadioGroup.fixtures';

const setup = (value: string, onChange?: (event: ChangeEvent<HTMLInputElement>) => void) =>
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

    test('calls onChange callback', () => {
        const onChange = jest.fn();

        setup(languages[0].toLowerCase(), onChange);

        userEvent.click(screen.getByLabelText(languages[1]));

        expect(onChange).toBeCalledTimes(1);
    });
});
