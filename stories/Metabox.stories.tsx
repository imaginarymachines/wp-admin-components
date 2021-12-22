import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Metabox,
  MetaboxProps,
  MetaboxWrapper,
  MetaboxWrapperProps,
 } from '../src';

const meta: Meta = {
  title: 'Metabox',
  component: Metabox,
  argTypes: {
    children: {
      control: {
        type: 'text',

      },
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin tortor lorem, a aliquet elit ultricies eu. In vitae enim et odio vehicula lacinia ac a tellus. Curabitur sodales, justo sodales tristique dignissim, nibh diam ultrices leo, ac vulputate quam felis eget metus. Suspendisse ac mauris sapien. In a velit finibus, viverra mi eget, lacinia risus. Mauris augue ex, vulputate vitae iaculis quis, ornare eget nibh. Etiam quis lacus nec nulla ullamcorper mattis nec nec ligula. Aenean diam velit, tristique et dolor a, varius convallis nulla. Mauris imperdiet molestie metus in ornare.'
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

  return (
    <MetaboxWrapper>
        <Metabox title={args.title||'Metabox Tile'} >{args.children || 'Inside the box'}</Metabox>
    </MetaboxWrapper>
  )
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
