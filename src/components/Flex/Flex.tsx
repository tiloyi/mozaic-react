import React, { FC } from 'react';
import cn from 'classnames';
import View from '../View';
import { IFlexProps } from './Flex.types';
import './Flex.scss';

const blockClassName = 'ml-flex';

const Flex: FC<IFlexProps> = ({ className, children, direction = 'row', ...props }): JSX.Element => {
    const flexClassName = cn(blockClassName, className, `${blockClassName}-${direction}`);

    return (
        <View className={flexClassName} {...props}>
            {children}
        </View>
    );
};

export default Flex;
