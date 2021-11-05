import React from 'react';
import { Story } from '@storybook/react';
import { MagicUnit } from '../../constants';
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
    marginTop: MagicUnit.MU200,
    marginRight: MagicUnit.MU200,
    marginBottom: MagicUnit.MU200,
    marginLeft: MagicUnit.MU200,
    paddingTop: MagicUnit.MU100,
    paddingRight: MagicUnit.MU100,
    paddingBottom: MagicUnit.MU100,
    paddingLeft: MagicUnit.MU100
};

export default {
    title: 'Utilities/View',
    component: View,
    argTypes: {}
};
