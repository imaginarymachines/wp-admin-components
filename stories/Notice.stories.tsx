import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Notice,NoticeProps } from '../src';

const meta: Meta = {
  title: 'Notices',
  component: Notice,
  argTypes: {
    description: {
      control: {
        type: 'text',

      },
      defaultValue: 'Alert'
    },
    isDismissible: {
      control: {
        type: 'boolean',
      },
    },
    type: {
      control: {
        type: 'text',
      },
      defaultValue: 'error'
    },
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Optional Heading'
    }

  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NoticeProps> = args => <Notice {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
