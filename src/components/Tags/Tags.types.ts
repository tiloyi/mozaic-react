import React, { AnchorHTMLAttributes, InputHTMLAttributes } from 'react';

export type TOnSelectTag = (tagId: string) => void;
export type TOnRemove = (tagId: string) => void;

export interface ITagsProps {
    tags: ITag[];
    onSelectTag?: TOnSelectTag;
    onRemove?: TOnRemove;
}

export interface ITag {
    id: string;
    tagData: ITagText | ITagLink | ITagSelectable | ITagRemovable;
}

export enum TagSize {
    's' = 's',
    'm' = 'm'
}

export interface ITagOptions {
    size?: TagSize;
    isDark?: boolean;
}

export interface ITagText {
    type: 'text';
    text: string;
}

export interface ITagTextProps extends ITagText, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}

type TOmittedLinkProps = 'id' | 'href';

export interface ITagLink extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, TOmittedLinkProps> {
    type: 'link';
    text: string;
    link: string;
}

export interface ITagLinkProps extends ITagLink, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}

type TOmmitedSelectableProps = 'id' | 'size' | 'type';
export interface ITagSelectable extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmmitedSelectableProps> {
    type: 'selectable';
    text: string;
    isSelected?: boolean;
    isDisabled?: boolean;
}

export interface ITagSelectableProps extends ITagSelectable, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onSelectTag?: TOnSelectTag;
}

export interface ITagRemovable {
    type: 'removable';
    text: string;
    onRemove?: TOnRemove;
}

export interface ITagRemovableProps extends ITagRemovable, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}
