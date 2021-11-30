import {Button} from '../src';
import React from 'react';
import {render} from '@testing-library/react'


it( 'Renders default button', () => {
    const {container} = render(<Button onClick={() =>{}}>ClickMe</Button>);
    expect(container).toMatchSnapshot();
});

it( 'Renders default link', () => {
    const {container} = render(<Button a={'https://hiroy.club'}>ClickMe</Button>);
    expect(container).toMatchSnapshot();
});
