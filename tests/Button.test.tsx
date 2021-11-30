import {Button} from '../src';
import React from 'react';
import snapshot from './snapshot';
it( 'Renders default button', () => {
    snapshot(<Button onClick={() =>{}}>ClickMe</Button>);
});

it( 'Renders default link', () => {
    snapshot(<Button a={'https://hiroy.club'}>ClickMe</Button>);
});


it( 'Renders secondary button', () => {
    snapshot(<Button onClick={() =>{}} variant="secondary">Secondary</Button>);
});

it( 'Renders small button', () => {
    snapshot(<Button onClick={() =>{}} isSmall={true}>Small</Button>);
});

it( 'Renders hero button', () => {
    snapshot(<Button onClick={() =>{}} isHero={true}>Hero</Button>);
});
