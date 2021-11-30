import {  ReactElement } from 'react';
import {render} from '@testing-library/react'

const snapshot = (Element:ReactElement) => {
    const {container} = render(Element);
    expect(container).toMatchSnapshot();
}

export default snapshot;
