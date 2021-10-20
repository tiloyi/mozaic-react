import React, { useState, FC } from 'react';
import { Story } from '@storybook/react';
import cn from 'classnames';

import QuantitySelector from './QuantitySelector';
import { IQuantitySelectorProps, QuantitySelectorSize } from './QuantitySelector.types';
import useQuantitySelector from '../../hooks/useQuantitySelector';
import { useCallback } from '@storybook/addons';

const Template: Story<IQuantitySelectorProps> = args => {
    const [value, setValue] = useState<number>(args.value || 0);

    return (
        <QuantitySelector
            {...args}
            value={value}
            onChange={targetValue => {
                setValue(targetValue);
            }}
        />
    );
};

export const QuantitySelectorStory = Template.bind({});

QuantitySelectorStory.args = {
    value: 0
};

QuantitySelectorStory.storyName = 'Quantity Selector';

export const LabeledQuantitySelectorStory = Template.bind({});

LabeledQuantitySelectorStory.args = {
    label: 'Label',
    value: 0
};

LabeledQuantitySelectorStory.storyName = 'Labeled Quantity Selector';

export const QuantitySelectorWithMin = Template.bind({});

QuantitySelectorWithMin.args = {
    value: 0,
    min: 0
};

QuantitySelectorWithMin.storyName = 'Quantity Selector with minimum 0';

export const QuantitySelectorWithMax = Template.bind({});

QuantitySelectorWithMax.args = {
    value: 0,
    max: 10
};

QuantitySelectorWithMax.storyName = 'Quantity Selector with maximum 10';

export const QuantitySelectorWithRange = Template.bind({});

QuantitySelectorWithRange.args = {
    value: 0,
    min: 0,
    max: 10
};

QuantitySelectorWithRange.storyName = 'Quantity Selector with range from 0 to 10';

const CustomInput: FC<{ value: number; onChange: (newValue: number) => void; color?: string }> = ({
    value,
    onChange,
    color
}) => (
    <input
        style={{ borderColor: color }}
        className={cn('mc-text-input mc-quantity-selector__input', `mc-text-input--${QuantitySelectorSize.Small}`)}
        type="number"
        value={value}
        min={0}
        max={2}
        onChange={event => {
            onChange(Number(event.target.value));
        }}
    />
);

const CustomQuantitySelectorTemplate: Story<IQuantitySelectorProps> = args => {
    const [value, setValue] = useState<number>(args.value || 0);

    const { onIncrement, onDecrement } = useQuantitySelector({ min: 0, max: 3, onChange: setValue, value });

    const calculateColor = useCallback(() => {
        if (value === 0) {
            return 'cornflowerblue';
        } else if (value === 1) {
            return 'blue';
        } else if (value === 2) {
            return 'purple';
        } else if (value === 3) {
            return 'green';
        }
    }, [value]);

    return (
        <QuantitySelector
            {...args}
            min={0}
            max={3}
            value={value}
            decrementButton={<button onClick={onDecrement}>➖</button>}
            incrementButton={<button onClick={onIncrement}>➕</button>}
            inputComponent={<CustomInput color={calculateColor()} value={value} onChange={setValue} />}
            onChange={targetValue => {
                setValue(targetValue);
            }}
        />
    );
};

export const CustomQuantitySelectorStory = CustomQuantitySelectorTemplate.bind({});

CustomQuantitySelectorStory.storyName = 'Custom Quantity Selector';

export default {
    title: 'QuantitySelector',
    component: QuantitySelector,
    argTypes: {}
};
