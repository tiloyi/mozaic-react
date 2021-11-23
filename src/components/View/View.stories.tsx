import React from 'react';
import { Story } from '@storybook/react';
import { IViewProps } from './View.types';
import View from './View';
import './View.stories.scss';

const Template: Story<IViewProps> = args => (
    <div className="view-outer">
        <View {...args} className="view-container">
            <div className="view-inner">View</div>
        </View>
    </div>
);

export const Controls = Template.bind({});

Controls.args = {
    marginTop: 'mu200',
    marginRight: 'mu200',
    marginBottom: 'mu200',
    marginLeft: 'mu200',
    paddingTop: 'mu100',
    paddingRight: 'mu100',
    paddingBottom: 'mu100',
    paddingLeft: 'mu100'
};
