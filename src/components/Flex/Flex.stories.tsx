import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { MagicUnit } from '../../constants';
import Button, { ButtonSize } from '../Button';
import View from '../View';
import { IFlexProps } from './Flex.types';
import Flex from './Flex';
import './Flex.stories.scss';

const Template: Story<IFlexProps> = args => {
    const [qty, setQty] = useState(3);

    const addChild = () => setQty(prevQty => prevQty + 1);

    const removeChild = () => setQty(prevQty => (prevQty > 1 ? prevQty - 1 : prevQty));

    return (
        <>
            <Flex {...args} className="flex-container">
                {Array.from({ length: qty }).map((_: unknown, index: number) => (
                    <div className="flex-inner" key={`flex-child-${index}`}>
                        {index}
                    </div>
                ))}
            </Flex>
            <Flex padding={MagicUnit.MU100}>
                <Button size={ButtonSize.S} onClick={addChild}>
                    Add child
                </Button>
                <View marginLeft={MagicUnit.MU100}>
                    <Button size={ButtonSize.S} onClick={removeChild}>
                        Remove child
                    </Button>
                </View>
            </Flex>
        </>
    );
};

export const Controls = Template.bind({});

Controls.args = {};

export default {
    title: 'Utilities/Flex',
    component: Flex,
    argTypes: {}
};
