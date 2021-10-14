import React from 'react';
import { Story } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';
import Tabs from './Tabs';
import { ITabsProps, TabType } from './Tabs.types';

const Template: Story<ITabsProps> = args => <Tabs {...args} />;

export const TabsStory = Template.bind({});

TabsStory.args = {
    type: TabType.Button,
    name: 'TabsStory',
    tabs: [
        {
            content: 'First tab'
        },
        {
            content: 'Second tab'
        },
        {
            content: 'Third tab'
        }
    ]
};

TabsStory.storyName = 'Tabs';

// export const LinkTabsStory = Template.bind({});

// LinkTabsStory.args = {
//     type: TabType.Link,
//     name: 'TabsStory',
//     tabs: [
//         {
//             link: '#1',
//             content: 'First tab'
//         },
//         {
//             link: '#2',
//             content: 'Second tab'
//         },
//         {
//             link: '#3',
//             content: 'Third tab'
//         }
//     ]
// };

// LinkTabsStory.storyName = 'Link Tabs';

export default {
    title: 'TabsStory',
    component: TabsStory,
    argTypes: {
        // theme: {
        //     control: {
        //         type: 'select'
        //     }
        // }
    }
};
