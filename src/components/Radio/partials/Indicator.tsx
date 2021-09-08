import React, { FC } from 'react';
import cn from 'classnames';
import { useRadioContext } from './Context';

export interface IRadioIndicatorProps {
    className?: string;
}

const RadioIndicator: FC<IRadioIndicatorProps> = ({ className }: IRadioIndicatorProps) => {
    const { isChecked, isDisabled } = useRadioContext();

    if (!isChecked) {
        return null;
    }

    return <input className={cn(className)} type="radio" checked={isChecked} disabled={isDisabled} />;
};

export default RadioIndicator;
