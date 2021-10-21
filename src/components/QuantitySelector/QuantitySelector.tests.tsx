import React, { useState } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import useQuantitySelector from '../../hooks/useQuantitySelector';

const Scene = ({ args }: { args?: Partial<IQuantitySelectorProps> }) => {
    const [value, setValue] = useState(0);

    return <QuantitySelector {...args} value={value} onChange={setValue} />;
};

const SceneCustomButtons = ({ args }: { args?: Partial<IQuantitySelectorProps> }) => {
    const [value, setValue] = useState(0);
    const { onDecrement, onIncrement } = useQuantitySelector({ value, onChange: setValue });

    return (
        <QuantitySelector
            {...args}
            decrementButton={
                <button role="button" aria-label="decrement-button" onClick={onDecrement}>
                    click me
                </button>
            }
            incrementButton={
                <button role="button" aria-label="increment-button" onClick={onIncrement}>
                    click me
                </button>
            }
            inputComponent={
                <input
                    value={value}
                    type="number"
                    aria-label="quantity-selector"
                    onChange={e => {
                        setValue(Number(e.target.value));
                    }}
                />
            }
            value={value}
            onChange={setValue}
        />
    );
};

const CustomLabelComponent = () => <div aria-label="customLabelComponent">I am label component</div>;

const setupScene = (args?: Partial<IQuantitySelectorProps>) => render(<Scene args={args} />);
const setupCustomScene = (args?: Partial<IQuantitySelectorProps>) => render(<SceneCustomButtons args={args} />);

describe('components/QuantitySelector', () => {
    test('renders correctly', () => {
        setupScene();

        const buttons = screen.getAllByRole('button');
        const input = screen.getByLabelText('quantity-selector');

        expect(buttons.length).toBe(2);
        expect(input).toBeDefined();
    });

    test('renders label', () => {
        setupScene({ label: 'Test' });

        const label = screen.getByLabelText('quantity-selector-label');

        expect(label).toBeInTheDocument();
    });

    test('decrements', () => {
        setupScene();

        const decrementButton = screen.getByLabelText('decrement-button');
        const input = screen.getByLabelText('quantity-selector');

        expect(decrementButton).toBeDefined();
        expect(input).toBeDefined();

        act(() => {
            fireEvent.click(decrementButton);
        });

        expect(input).toHaveAttribute('value', '-1');
    });

    test('increments', () => {
        setupScene();

        const incrementButton = screen.getByLabelText('increment-button');
        const input = screen.getByLabelText('quantity-selector');

        expect(incrementButton).toBeDefined();
        expect(input).toBeDefined();

        act(() => {
            fireEvent.click(incrementButton);
        });

        expect(input).toHaveAttribute('value', '1');
    });
});

describe('custom components/QuantitySelector', () => {
    test('render buttons and input', () => {
        setupCustomScene();

        const decrementButton = screen.getByLabelText('decrement-button');
        const incrementButton = screen.getByLabelText('increment-button');
        const input = screen.getByLabelText('quantity-selector');

        expect(decrementButton).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test('decrements', () => {
        setupCustomScene();

        const decrementButton = screen.getByLabelText('decrement-button');
        const input = screen.getByLabelText('quantity-selector');

        expect(decrementButton).toBeInTheDocument();
        expect(input).toBeInTheDocument();

        act(() => {
            fireEvent.click(decrementButton);
        });
        expect(input).toHaveAttribute('value', '-1');
    });

    test('increments', () => {
        setupCustomScene();

        const incrementButton = screen.getByLabelText('increment-button');
        const input = screen.getByLabelText('quantity-selector');

        expect(incrementButton).toBeInTheDocument();
        expect(input).toBeInTheDocument();

        act(() => {
            fireEvent.click(incrementButton);
        });
        expect(input).toHaveAttribute('value', '1');
    });

    test('renders custom labelComponent', () => {
        setupScene({ labelComponent: <CustomLabelComponent /> });

        const labelComponent = screen.getByLabelText('customLabelComponent');

        expect(labelComponent).toBeInTheDocument();
    });
});
