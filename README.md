## aframe-react-boilerplate

Combining [A-Frame VR](https://aframe.io) with React.

```html
class BoilerplateScene extends React.Component {
  render () {
    return (
      <Scene>
        <Camera/>

        <Sky/>

        <Light type="ambient" color="#888"/>
        <Light type="directional" intensity="0.5" position="-1 1 0"/>
        <Light type="directional" intensity="1" position="1 1 0"/>

        <Entity geometry={{primitive: 'box'}} material="color: red" position="0 0 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>
      </Scene>
    );
  }
}
```

### Getting Started

To get started:

```bash
npm install
npm run serve-js &
npm run serve
```

Then head over to localhost:8000.

### Terminology

Be aware of the difference between React components and A-Frame components.

A-Frame components refers to components of the entity-component system.

### React Components

`aframe-react-boilerplate` ships with a few core components and several extra
components. The extra components such as `Light` or `Sky` are thin wrappers on
top of the core components to show off A-Frame + React. Eventually, the core
components will be split out into their own package.

#### \<Scene/>

The `Scene` React component is a thin wrapper around `<a-scene>`. The scene
holds all of the entities.

```html
<Scene>
  <Entity/>
</Scene>
```

#### \<Entity {...components}\/>

The `Entity` React component is a wrapper around `<a-entity>`. Entities are
general purpose objects in the scene (e.g., tree, player, light, sky) that are
modified with components. `Entity` handles serialization of A-Frame components.
A-Frame components can then be passed via props either via object or string.

```html
<Entity geometry={{primitive: 'box'}} material='color: red'/>
```

#### \<Animation {...attributes}\/>

The `Animation` React component is a thin wrapper around `<a-animation>`.

```html
<Animation attribute="rotation" dur="10000" repeat="indefinite" to="0 360 360"/>
```
