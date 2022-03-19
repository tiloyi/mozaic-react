import React, { FC, useMemo } from 'react';
import cn from 'classnames';
import View from '../View';
import { IFlexProps, TAlignContent, TAlignItems, TFlexDirection, TFlexWrap, TJustifyContent } from './Flex.types';
import './Flex.scss';

const blockClassName = 'ml-flex';

export function getDirectionModifier(direction?: TFlexDirection): string {
    if (direction) {
        return `${blockClassName}--fd-${direction}`;
    }

    return '';
}

export function getWrapModifier(wrap?: TFlexWrap): string {
    if (wrap) {
        return `${blockClassName}--fw-${wrap}`;
    }

    return '';
}

export function getAlignContentModifier(alignContent?: TAlignContent): string {
    if (alignContent) {
        return `${blockClassName}--ac-${alignContent}`;
    }

    return '';
}

export function getAlignItemsModifier(alignItems?: TAlignItems): string {
    if (alignItems) {
        return `${blockClassName}--ai-${alignItems}`;
    }

    return '';
}

export function getJustifyContentModifier(justifyContent?: TJustifyContent): string {
    if (justifyContent) {
        return `${blockClassName}--jc-${justifyContent}`;
    }

    return '';
}

const Flex: FC<IFlexProps> = ({
    className,
    children,
    direction,
    wrap,
    alignContent,
    alignItems,
    justifyContent,
    ...props
}): JSX.Element => {
    const flexClassName = useMemo(
        () =>
            cn(
                blockClassName,
                className,
                getDirectionModifier(direction),
                getWrapModifier(wrap),
                getAlignContentModifier(alignContent),
                getAlignItemsModifier(alignItems),
                getJustifyContentModifier(justifyContent)
            ),
        [className, direction, wrap, alignContent, alignItems, justifyContent]
    );

    return (
        <View className={flexClassName} {...props}>
            {children}
        </View>
    );
};

export default Flex;
