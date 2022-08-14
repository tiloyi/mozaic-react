import React from 'react';
import { Story } from '@storybook/react';
import { TabsButton } from './partials';
import { ITabsListProps } from './Tabs.types';
import TabsList from './TabsList';
import useTabsState from './useTabsState';

export const ListTemplate: Story<ITabsListProps> = args => {
    const { tab, select } = useTabsState('tab1');

    return (
        <TabsList {...args}>
            <TabsButton isSelected={tab === 'tab1'} onClick={() => select('tab1')}>
                Tab #1
            </TabsButton>
            <TabsButton isSelected={tab === 'tab2'} onClick={() => select('tab2')}>
                Tab #2
            </TabsButton>
            <TabsButton isSelected={tab === 'tab3'} onClick={() => select('tab3')}>
                Tab #3
            </TabsButton>
            <TabsButton isDisabled>Tab #4</TabsButton>
        </TabsList>
    );
};

export const List = ListTemplate.bind({});

List.args = {
    theme: 'primary-01',
    width: 'fit'
};

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    },
    width: {
        control: {
            type: 'select'
        }
    }
};

//
// import TabButton from './partials/TabButton';
// import TabLink from './partials/TabLink';
//
// const Template: Story<ITabsProps> = args => (
//     <Tabs {...args}>
//         <TabButton name="first">First</TabButton>
//         <TabButton name="second">Second</TabButton>
//         <TabButton name="third">Third</TabButton>
//     </Tabs>
// );
//
// export const TabsStory = Template.bind({});
//
// TabsStory.args = {
//     name: 'TabsStory',
//     initialTab: 'first',
//     theme: 'primary-01'
// };
//
// TabsStory.storyName = 'Button Tabs';
//
// export const TabsFullWidth = Template.bind({});
//
// TabsFullWidth.args = {
//     name: 'TabsStory',
//     initialTab: 'first',
//     isFullWidth: true
// };
//
// TabsFullWidth.storyName = 'Tabs full width';
//
// export const TabsAlignedToContainer = Template.bind({});
//
// TabsAlignedToContainer.args = {
//     name: 'TabsStory',
//     initialTab: 'first',
//     isAlignedToContainer: true
// };
//
// TabsAlignedToContainer.storyName = 'Tabs aligned to container';
//
// const LinkTemplate: Story<ITabsProps> = args => (
//     <Tabs {...args}>
//         <TabLink link="/?path=/story/tabsstory--link-tabs-story#first">First</TabLink>
//         <TabLink link="/?path=/story/tabsstory--link-tabs-story#second">Second</TabLink>
//         <TabLink link="/?path=/story/tabsstory--link-tabs-story#third">Third</TabLink>
//     </Tabs>
// );
//
// export const LinkTabsStory = LinkTemplate.bind({});
//
// LinkTabsStory.args = {
//     name: 'LinkTabsStory',
//     initialTab: 'first'
// };
//
// LinkTabsStory.storyName = 'Link Tabs';
//
// export default {
//     title: 'Components/Tabs',
//     component: TabsStory,
//     argTypes: {
//         theme: {
//             options: ['primary-01', 'primary-02'],
//             control: {
//                 type: 'select'
//             }
//         }
//     }
// };
