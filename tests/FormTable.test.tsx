import {FormTable,Form, TrInput, TrSelect, TrSubmitButton} from '../src';
import React from 'react';
import snapshot from './snapshot';

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
}

describe('FormTable', () => {
    it( 'creates form', () => {
        const onSubmit = ()=>{};
        snapshot(<FormTable>
            <Form id="form-1" onSubmit={onSubmit}>
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
            </Form>
        </FormTable>)
    });
})
