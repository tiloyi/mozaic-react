import React, { FC } from 'react';
import { IBreadcrumbsProps } from './Breadcrumbs.types';
import { BreadcrumbsContainer } from './partials';
import './Breadcrumbs.scss';

const Breadcrumbs: FC<IBreadcrumbsProps> = ({ children, ...props }): JSX.Element => (
    <BreadcrumbsContainer {...props}>{children}</BreadcrumbsContainer>
);

export default Breadcrumbs;
