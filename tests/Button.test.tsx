import {Button} from '../src';
import React from 'react';
import snapshot from './snapshot';
it( 'Renders default button', () => {
    snapshot(<Button onClick={() =>{}}>ClickMe</Button>);
});

it( 'Renders default link', () => {
    snapshot(<Button a={'https://hiroy.club'}>ClickMe</Button>);
});
