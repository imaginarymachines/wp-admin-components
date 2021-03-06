# WP Admin Components

WordPress admin UI as React components for plugin development. These are very minimal components, for building plugin UIs that look like WordPress. There is no CSS, the CSS and layout of a WordPress admin page is assumed.

When using this in a plugin or theme, make sure to use [@wordpress/script](https://www.npmjs.com/package/@wordpress/scripts). This is configured automatically when you create plugins with [Plugin Machine](https://pluginmachine.com).

- [Storybook Documentation](https://imaginarymachines.github.io/wp-admin-components?path=/story/buttons--default)
- [Github](https://github.com/imaginarymachines/wp-admin-components)
- [![CI](https://github.com/imaginarymachines/wp-admin-components/actions/workflows/main.yml/badge.svg)](https://github.com/imaginarymachines/wp-admin-components/actions/workflows/main.yml)
- ![npm](https://img.shields.io/npm/v/@imaginary-machines/wp-admin-components?style=flat-square)

## Usage

### Install

```bash
yarn add @imaginary-machines/wp-admin-components
```

or

```bash
npm i @imaginary-machines/wp-admin-components
```

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

#### Dismissable Info Notice

```jsx
import {Notice} from  "@imaginary-machines/wp-admin-components"

<Notice
  heading={"Hey You! Buy Things!"}
  link={"https://hiroy.club/store"}
  description={"Click This Link"}
  type="ifno"
  isDismissable={true}
  onDismissed={()=> {
    //...
  }}
/>
```
#### Dismissable Error Notice

```jsx
import {Notice} from  "@imaginary-machines/wp-admin-components"

<Notice
  description={"There Was Error"}
  type="error"
  isDismissable={true}
  onDismissed={()=> {
    //...
  }}
/>
```
### Forms

```jsx
import {
  Form,
  FormTable,
  FormProps,
  TrInput,
  TrSelect,
  TrSubmitButton
}
from  "@imaginary-machines/wp-admin-components";

const SettingsForm = () => {

  const [values,setValues] = useState({
      input:'Input',
      select:'two'
  });
  const onSubmit = () => {}
  return (
      <Form id={id} onSubmit={onSubmit}>
        <FormTable >
            <>
                <TrInput
                    label={'Input Field'}
                    id={'input'}
                    name={'input'}
                    value={values.input}
                    onChange={(value:string) => setValues({...values,input:value})}
                />
                <TrSelect
                    label={'Select Field'}
                    id={'select'}
                    name={'select'}
                    value={values.select}
                    onChange={(value:string) => setValues({...values,select:value})}
                />
                <TrSubmitButton
                    id={'submit-button'}
                    name={'submit-button'}
                    value={'Save'}
                />
            </>
        </FormTable>
    </Form>
  )
}

```

### Collapsable Metabox

```jsx
import {Metabox,MetaboxWrapper} from  "@imaginary-machines/wp-admin-components"
<MetaboxWrapper>
  <Metabox title={'Metabox Tile'}> Inside the box</Metabox>
    <Metabox title={'Another Metabox Tile'}><p>Blocks</p></Metabox>

</MetaboxWrapper>
```

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


### Publish to npm

```bash
npm publish --access public
```
