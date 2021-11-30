import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs,TabsProps } from '../src';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    activeTab: {
      control: {
        type: 'text',
      },
    },

  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Tab1 = () => (
  <div>Tab 1</div>
);
const Template: Story<TabsProps> = args => <Tabs {...args}/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
