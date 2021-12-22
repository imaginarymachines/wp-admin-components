import {Metabox,MetaboxWrapper} from '../src';
import React from 'react';
import snapshot from './snapshot';
import {render,
    fireEvent,
    //act
} from '@testing-library/react';
it( 'Renders default button', () => {
    snapshot(
        <MetaboxWrapper>
            <Metabox  title={'Heading'}>World</Metabox>
        </MetaboxWrapper>
    );
});

it( 'Renders with many children', () => {
    snapshot(
        <MetaboxWrapper>
            <Metabox  title={'Heading'}>
                <div>
                    <p>one</p>
                    <em>Two</em>
                </div>
            </Metabox>
        </MetaboxWrapper>
    );
});

it( 'closes', async() =>{
    const {findByText,container} = render(
        <MetaboxWrapper>
            <Metabox  title={'Heading'}>World</Metabox>
        </MetaboxWrapper>
    );
    const el = await findByText('Metabox collapse');
    fireEvent.click( el );
    expect(container.querySelector('inside')).toBeNull();
});
