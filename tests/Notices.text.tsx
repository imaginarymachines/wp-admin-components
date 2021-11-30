import {Notice} from '../src';
import React from 'react';
import snapshot from './snapshot';
it( 'Renders default button', () => {
    snapshot(<Notice  heading={'Heading'}description={'words'}/>);
});
