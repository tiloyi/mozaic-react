import React from 'react';
import { Story } from '@storybook/react';
import Text from '../Text';
import { IViewProps } from './View.types';
import View from './View';
import './View.stories.scss';

const SpacingTemplate: Story<IViewProps> = args => (
    <div className="view-outer">
        <View {...args} className="view-container">
            <div className="view-inner">View</div>
        </View>
    </div>
);

export const Spacings = SpacingTemplate.bind({});

Spacings.args = {
    marginTop: 'mu200',
    marginRight: 'mu200',
    marginBottom: 'mu200',
    marginLeft: 'mu200',
    paddingTop: 'mu100',
    paddingRight: 'mu100',
    paddingBottom: 'mu100',
    paddingLeft: 'mu100'
};

Spacings.argTypes = {
    shadow: {
        table: {
            disable: true
        }
    },
    radius: {
        table: {
            disable: true
        }
    }
};

Spacings.parameters = {
    backgrounds: {
        default: 'default'
    }
};

const ShadowsTemplate: Story<IViewProps> = args => (
    <View {...args} className="view-white-container" padding="mu100">
        <Text>View</Text>
    </View>
);

export const ShadowsAndBorders = ShadowsTemplate.bind({});

ShadowsAndBorders.argTypes = {
    margin: {
        table: {
            disable: true
        }
    },
    marginTop: {
        table: {
            disable: true
        }
    },
    marginRight: {
        table: {
            disable: true
        }
    },
    marginBottom: {
        table: {
            disable: true
        }
    },
    marginLeft: {
        table: {
            disable: true
        }
    },
    padding: {
        table: {
            disable: true
        }
    },
    paddingTop: {
        table: {
            disable: true
        }
    },
    paddingRight: {
        table: {
            disable: true
        }
    },
    paddingBottom: {
        table: {
            disable: true
        }
    },
    paddingLeft: {
        table: {
            disable: true
        }
    }
};

export const argTypes = {
    shadow: {
        control: {
            type: 'select'
        }
    },
    radius: {
        control: {
            type: 'select'
        }
    }
};
