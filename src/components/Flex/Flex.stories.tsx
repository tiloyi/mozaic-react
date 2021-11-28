import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Button from '../Button';
import View from '../View';
import { IFlexProps } from './Flex.types';
import Flex from './Flex';
import './Flex.stories.scss';

const Template: Story<IFlexProps> = args => {
    const [qty, setQty] = useState(3);

    const addChild = (): void => setQty(prevQty => prevQty + 1);

    const removeChild = (): void => setQty(prevQty => (prevQty > 1 ? prevQty - 1 : prevQty));

    return (
        <>
            <Flex {...args} className="flex-container">
                {Array.from({ length: qty }).map((_: unknown, index: number) => (
                    <div className="flex-inner" key={`flex-child-${index}`}>
                        {index}
                    </div>
                ))}
            </Flex>
            <Flex padding="mu100">
                <Button size="s" onClick={addChild}>
                    Add child
                </Button>
                <View marginLeft="mu100">
                    <Button size="s" onClick={removeChild}>
                        Remove child
                    </Button>
                </View>
            </Flex>
        </>
    );
};

export const Controls = Template.bind({});

Controls.args = {};

export const argTypes = {
    direction: {
        control: {
            type: 'select'
        }
    },
    justifyContent: {
        control: {
            type: 'select'
        }
    },
    alignContent: {
        control: {
            type: 'select'
        }
    },
    alignItems: {
        control: {
            type: 'select'
        }
    },
    wrap: {
        control: {
            type: 'select'
        }
    },
    shadow: {
        table: {
            disable: true
        }
    },
    radius: {
        table: {
            disable: true
        }
    }
};
