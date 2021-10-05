import { AnchorHTMLAttributes } from 'react';

export interface ITagsProps {
    tags: ITag[];
}

export interface ITag {
    id: string;
    tag: ITagText | ITagLink;
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
}

type TOmittedProps = 'id' | 'href';

export interface ITagLink extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, TOmittedProps> {
    type: 'link';
    text: string;
    link: string;
}

export interface ITagLinkProps extends ITagLink, ITagOptions {
    id: string;
}
