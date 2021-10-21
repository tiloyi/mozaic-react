import { AnchorHTMLAttributes, InputHTMLAttributes, HTMLAttributes } from 'react';

export type TOnSelectTag = (tagId: string) => void;
export type TOnRemove = (tagId: string) => void;

type TOmmitedTagGroupProps = 'className';

export interface ITagGroupProps extends Omit<HTMLAttributes<HTMLUListElement>, TOmmitedTagGroupProps> {
    className?: string;
    tags: ITag[];
    onSelectTag?: TOnSelectTag;
    onRemove?: TOnRemove;
}

export enum TagType {
    'Text' = 'text',
    'Link' = 'link',
    'Removable' = 'removable',
    'Selectable' = 'selectable'
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

export interface ITagText extends HTMLAttributes<HTMLSpanElement> {
    type?: TagType.Text;
    text: string;
    content?: JSX.Element;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}

export interface ITagTextProps extends ITagText, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}

type TOmittedLinkProps = 'id' | 'href';

export interface ITagLink extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, TOmittedLinkProps> {
    type?: TagType.Link;
    text: string;
    content?: JSX.Element;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    link?: string;
}

export interface ITagLinkProps extends ITagLink, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}

type TOmmitedSelectableProps = 'id' | 'size' | 'type';
export interface ITagSelectable extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmmitedSelectableProps> {
    type?: TagType.Selectable;
    text: string;
    content?: JSX.Element;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    isSelected?: boolean;
    isDisabled?: boolean;
}

export interface ITagSelectableProps extends ITagSelectable, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onSelectTag?: TOnSelectTag;
}

export interface ITagRemovable extends HTMLAttributes<HTMLSpanElement> {
    type?: TagType.Removable;
    text: string;
    content?: JSX.Element;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onRemove?: TOnRemove;
}

export interface ITagRemovableProps extends ITagRemovable, ITagOptions {
    id: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}
