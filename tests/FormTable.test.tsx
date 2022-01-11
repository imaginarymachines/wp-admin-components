import {FormTable,Form, TrInput, TrSelect, TrSubmitButton} from '../src';
import React from 'react';
import snapshot from './snapshot';
import {render,act, fireEvent} from '@testing-library/react';
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



describe('FormTable', () => {
    it( 'creates form', () => {
        const onSubmit = ()=>{};
        snapshot(<Form id="form-1" onSubmit={onSubmit}>
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
        </Form>)
    });


    it( 'Select has default value', () => {
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const {getByLabelText} = render(<Form id="form-1" onSubmit={onSubmit}>
            <FormTable >
                <>

                    <TrSelect
                        {...{
                            ...selectProps,
                            onChange:onChange,
                            value: 'two'
                        }}
                    />

                </>
            </FormTable>
        </Form>);
        //@ts-ignore
        expect( getByLabelText(selectProps.label).value).toBe('two');

    });


    it( 'Select changes value', () => {
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const {getByLabelText} = render(<Form id="form-1" onSubmit={onSubmit}>
            <FormTable >
                <>
                    <TrSelect
                        {...{
                            ...selectProps,
                            onChange:onChange,
                            value: 'two'
                        }}
                    />
                </>
            </FormTable>
        </Form>);

        act(  ()=> {
            fireEvent.change(getByLabelText('Select'), {target:{value:'one'}});
        });

        expect( onChange ).toBeCalledTimes(1);
        expect( onChange ).toBeCalledWith('one');

    });


    test( 'Input sets default value', () => {
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const {getByLabelText} = render(<Form id="form-1" onSubmit={onSubmit}>
            <FormTable >
                <>
                    <TrInput
                        {...{
                            ...inputProps,
                            onChange:onChange,
                            value: 'Hats'
                        }}
                    />
                </>
            </FormTable>
        </Form>);
        //@ts-ignore
        expect( getByLabelText(inputProps.label).value).toBe('Hats');
    })

    test( 'Input cahnges value', () => {
        const onSubmit = jest.fn();
        const onChange = jest.fn();
        const {getByLabelText} = render(<Form id="form-1" onSubmit={onSubmit}>
            <FormTable >
                <>
                    <TrInput
                        {...{
                            ...inputProps,
                            onChange:onChange,
                            value: 'Hats'
                        }}
                    />
                </>
            </FormTable>
        </Form>);
        act( () => {
            fireEvent.change(getByLabelText(inputProps.label),{target:{value:'Rocks'}});
        });
        expect( onChange ).toBeCalledTimes(1);
        expect( onChange ).toBeCalledWith('Rocks');
    })
})
