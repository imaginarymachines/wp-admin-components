# WP Admin Components

WordPress admin UI as React components for plugin development

[![CI](https://github.com/imaginarymachines/wp-admin-components/actions/workflows/main.yml/badge.svg)](https://github.com/imaginarymachines/wp-admin-components/actions/workflows/main.yml)

## Usage

### Buttons

![buttons-first](https://user-images.githubusercontent.com/1994311/143970215-c0d3d4ba-00a0-46bc-bc1a-65344a23ec90.jpg)

```jsx
import {Button} from "@imaginary-machines/wp-admin-components"
<Button onClick={() => {console.log('Clicked')}}>Click Me</Button>
```


### Tabs
![tabs-first](https://user-images.githubusercontent.com/1994311/143970259-e448c6f5-369b-4f70-a4df-ef9f72f04e84.jpg)

```jsx
import {Tabs} from "@imaginary-machines/wp-admin-components"

<Tabs
  initialTabe={'two'}
  tabs={[
    {id: 'one', children:<div>Tab One Content</div>,label:'One'},
    {id: 'two', children:<div>Tab Two Content</div>,label:'Two'},
    {id: 'three', children:<div>Tab Three Content</div>,label:'Three'},
]}/>
```

### Notices

@todo

### Forms

@todo

## Development

The recommended workflow is to run TSDX in one terminal:

```bash
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or tests

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.


### Tests

Jest tests are set up to run with or `yarn test`.
