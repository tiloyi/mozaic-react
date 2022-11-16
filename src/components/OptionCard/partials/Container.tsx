import React, { FC } from 'react';
import cn from 'classnames';
import { View } from '../../View';
import { IOptionCardPartialProps } from '../OptionCard.types';

const OptionCardContainer: FC<IOptionCardPartialProps> = ({ className, padding, children }) => (
    <View as="label" className={cn('mc-option-card', className)} padding={padding}>
        {children}
    </View>
);

export default OptionCardContainer;
