import {Metabox} from '../src';
import React from 'react';
import snapshot from './snapshot';
import {render,
    fireEvent,
    //act
} from '@testing-library/react';
it( 'Renders default button', () => {
    snapshot(<Metabox  title={'Heading'}>World</Metabox>);
});

it( 'closes', async() =>{
    const {findByText,container} = render(<Metabox  title={'Heading'}>World</Metabox>);
    const el = await findByText('Metabox collapse');
    fireEvent.click( el );
    expect(container.querySelector('inside')).toBeNull();
});
