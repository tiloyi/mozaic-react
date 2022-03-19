import React from 'react';
import { useForm } from 'react-hook-form';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { languages } from '../RadioGroup/RadioGroup.fixtures';
import Button from '../Button';
import Radio from './Radio';

interface IFormValues {
    language: string;
}

interface IFormProps {
    defaultValues: IFormValues;
    onSubmit: (values: IFormValues) => void;
}

const Form = ({ defaultValues, onSubmit }: IFormProps): JSX.Element => {
    const { register, handleSubmit } = useForm<IFormValues>({ defaultValues });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {languages.map(lang => (
                <Radio
                    className="radio-group-item"
                    {...register('language')}
                    key={lang.toLowerCase()}
                    value={lang.toLowerCase()}
                >
                    {lang}
                </Radio>
            ))}
            <Button type="submit">Submit</Button>
        </form>
    );
};

describe('components/Radio', () => {
    test('renders children correctly', () => {
        render(<Radio>Radio label</Radio>);

        expect(screen.getByText('Radio label')).toBeInTheDocument();
    });

    test('renders checked correctly', () => {
        const onChange = jest.fn();

        render(
            <Radio isChecked onChange={onChange}>
                Radio label
            </Radio>
        );

        expect(screen.getByRole('radio')).toBeChecked();
    });

    test('renders unchecked correctly', () => {
        const onChange = jest.fn();

        render(
            <Radio isChecked={false} onChange={onChange}>
                Radio label
            </Radio>
        );

        expect(screen.getByRole('radio')).not.toBeChecked();
    });

    test('renders disabled correctly', () => {
        render(<Radio isDisabled>Radio label</Radio>);

        expect(screen.getByRole('radio')).toBeDisabled();
    });

    test('renders invalid correctly', () => {
        render(<Radio isInvalid>Invalid radio label</Radio>);

        expect(screen.getByRole('radio')).toHaveClass('is-invalid');
    });

    test('works with react-hook-form', async () => {
        const onSubmit = jest.fn();
        const defaultValues = {
            language: languages[0].toLowerCase()
        };

        render(<Form defaultValues={defaultValues} onSubmit={onSubmit} />);

        expect(screen.getByLabelText(languages[0])).toBeChecked();

        userEvent.click(screen.getByLabelText(languages[1]));

        expect(screen.getByLabelText(languages[0])).not.toBeChecked();
        expect(screen.getByLabelText(languages[1])).toBeChecked();

        await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Submit' })));

        expect(onSubmit).toHaveBeenCalledWith({ language: languages[1].toLowerCase() }, expect.any(Object));
    });
});
