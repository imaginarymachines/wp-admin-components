import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs,TabsProps } from '../src';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    initialTab: {
      control: {
        type: 'text',
      },
      defaultValue: 'two'
    },
    tabs: {
      control: {
        type: 'array',
      },
      defaultValue: [
        {id: 'one', children:<div>Tab One Content</div>,label:'One'},
        {id: 'two', children:<div>Tab Two Content</div>,label:'Two'},
        {id: 'three', children:<div>Tab Three Content</div>,label:'Three'},
      ]
    },


  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<TabsProps> = args => <Tabs {...args}/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
