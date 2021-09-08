import React, { FC } from 'react';
import cn from 'classnames';

export interface IRadioLabelProps {
    className?: string;
}

const RadioLabel: FC<IRadioLabelProps> = ({ className, children }) => <div className={cn(className)}>{children}</div>;

export default RadioLabel;
