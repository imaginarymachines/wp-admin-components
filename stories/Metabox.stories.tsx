import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Metabox,
  MetaboxProps,
 } from '../src';

const meta: Meta = {
  title: 'Buttons',
  component: Metabox,
  argTypes: {
    children: {
      control: {
        type: 'text',

      },
      defaultValue: 'Text Inside metabox'
    },
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'The Title'
    },

  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MetaboxProps> = args => {
  console.log(args);
  return (
    <Metabox {...args} />
  )
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
