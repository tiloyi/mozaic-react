import React from 'react';
import { Story } from '@storybook/react';
import { ILinkProps } from './Link.types';
import Link from './Link';

const Template: Story<ILinkProps> = args => <Link {...args} />;

export const LinkStory = Template.bind({});

LinkStory.args = {};

export const argTypes = {};
