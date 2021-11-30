import React, { FC, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { FormTable, FormProps,TrInput,TrSelect,TrSubmitButton,
   Form } from '../src';
let inputChange = (value:string) => {console.log(value)}
let inputProps = {
    id:'i-1',
    label:'Input One',
    onChange:inputChange,
    name: 'i-1',
    value: ''
}

let selectChange = (value:string) => {console.log(value)}
let selectProps = {
    id:'s-1',
    label:'Select',
    onChange:selectChange,
    name: 's-1',
    value: '',
    options:[
        {value: 'one', label:'One'},
        {value: 'two', label:'Two'}

    ]
}

let submitProps = {
    id:'sub-1',
    name: 'sub-1',
    value: 'Click Me'
};

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

const Test : FC<FormProps> = ({id,onSubmit}) => {
  const [values,setValues] = useState({
      input:'Input',
      select:'two'
  })
  return (
    <Form id={id} onSubmit={onSubmit}>
    <FormTable >
        <>
            <TrInput
                {...inputProps}
                onChange={(value:string) => setValues({...values,input:value})}
            />
            <TrSelect
                {...selectProps}
                onChange={(value:string) => setValues({...values,select:value})}

            />
            <TrSubmitButton
                {...submitProps}
            />
        </>
    </FormTable>
  </Form>

  )
}
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
