<h1 align="center">
  <img src="https://raw.githubusercontent.com/ferdipret/svg2Image/main/resources/svg2image-logo.png" alt="svg2Image" title="svg2Image" width="300">
</h1>
<p align="center" style="font-size: 1.2rem;">Makes downloading SVGs as raster graphics images a breeze.</p>

```ts
svg2Image(SVGElement, options).then(base64result)
```

### Install

```sh
npm i @ferdipret/svg-2-img
# or
yarn add @ferdipret/svg-2-img
```

### Features

- Written in typescript.
- Supports multiple image formats(png, jpeg, jpg).
- Alter download image styles.
- Returns the resulting base64 string as a promise.

### Example

```tsx
...
import svg2Img from '@ferdipret/svg-2-img'


function Component() {
  const logoRef = useRef<SVGSVGElement>(null)

  const handleClick = () => {
    const svg = logoRef.current

    svg2Img(svg)
  }

  return (
    <>
      <Logo ref={logoRef} />
      <button onClick={handleClick}>Download image</button>
    </>
  )
}
```
