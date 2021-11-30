import React from 'react';
import { Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { BreadcrumbsItem } from './partials';
import Breadcrumbs from './Breadcrumbs';

const LightTemplate: Story = () => (
    <Breadcrumbs>
        <BreadcrumbsItem href="#">Level 00</BreadcrumbsItem>
        <BreadcrumbsItem href="#">Here is the level 01</BreadcrumbsItem>
        <BreadcrumbsItem href="#">This is another very long level (Level 02) link</BreadcrumbsItem>
        <BreadcrumbsItem href="#">The third level (Level 03) is here</BreadcrumbsItem>
        <BreadcrumbsItem href="#" isCurrent>
            This is the last Level link
        </BreadcrumbsItem>
    </Breadcrumbs>
);

export const Light = LightTemplate.bind({});

const DarkTemplate: Story = () => (
    <Breadcrumbs theme="dark">
        <BreadcrumbsItem href="#">Level 00</BreadcrumbsItem>
        <BreadcrumbsItem href="#">Here is the level 01</BreadcrumbsItem>
        <BreadcrumbsItem href="#">This is another very long level (Level 02) link</BreadcrumbsItem>
        <BreadcrumbsItem href="#">The third level (Level 03) is here</BreadcrumbsItem>
        <BreadcrumbsItem href="#" isCurrent>
            This is the last Level link
        </BreadcrumbsItem>
    </Breadcrumbs>
);

export const Dark = DarkTemplate.bind({});

const ResponsiveTemplate: Story = () => (
    <Breadcrumbs isResponsive>
        <BreadcrumbsItem href="#">Level 00</BreadcrumbsItem>
        <BreadcrumbsItem href="#">Here is the level 01</BreadcrumbsItem>
        <BreadcrumbsItem href="#" isActive>
            This is another very long level (Level 02) link
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#">The third level (Level 03) is here</BreadcrumbsItem>
        <BreadcrumbsItem href="#" isCurrent>
            This is the last Level link
        </BreadcrumbsItem>
    </Breadcrumbs>
);

export const Responsive = ResponsiveTemplate.bind({});

Responsive.parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'galaxys9'
    }
};

export const argTypes = {};
