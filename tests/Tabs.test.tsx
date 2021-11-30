import {Tabs} from '../src';
import React from 'react';
import snapshot from './snapshot';
const tabs = [
    {id: 'one', children:<div>Tab One Content</div>,label:'One'},
    {id: 'two', children:<div>Tab Two Content</div>,label:'Two'},
    {id: 'three', children:<div>Tab Three Content</div>,label:'Three'},
];

describe( 'Tabs',() => {
    it( 'Renders', () => {
        snapshot(<Tabs id="tabs-1" tabs={tabs} />)
    });
    it( 'Renders with inital tab', () => {
        snapshot(<Tabs id="tabs-2" tabs={tabs}  initialTab={'two'}/>)
    });

});
