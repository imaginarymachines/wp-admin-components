import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FormTable, FormProps,TrInput,TrSelect,TrSubmitButton, Form } from '../src';
import {formTableTestProps} from '../tests/FormTable.test'
const {
  submitProps,
  selectProps,
  inputProps
} =formTableTestProps;
const meta: Meta = {
  title: 'FormTable',
  component: FormProps,
  argTypes: {
    id: {
      control: {
        type: 'text',

      },
      defaultValue: 'form-id'
    },

  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = props => (<Form id={props.id} onSubmit={() => {}}>
    <FormTable >
        <>
            <TrInput
                {...inputProps}
            />
            <TrSelect
                {...selectProps}
            />
            <TrSubmitButton
                {...submitProps}
            />
        </>
    </FormTable>
  </Form>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
