<h1 align="center">
  <img src="https://raw.githubusercontent.com/ferdipret/svg2Image/main/resources/svg2image-logo.png" alt="svg2Image" title="svg2Image" width="300">
</h1>
<p align="center" style="font-size: 1.2rem;">The easiest way to download an SVG as an image.</p>

## Install

```sh
npm install @ferdipret/svg-2-img

# or

yarn add @ferdipret/svg-2-img
```

## Examples

#### Vanilla JS Image Download

```js
import svg2Img from '@ferdipret/svg-2-img'
const svgElement = document.querySelector('#myLogo')
const downloadButton = document.querySelector('#downloadButton')

downloadButton.addEventListener('click', () => {
  svg2Img(svgElement, {
    format: 'jpeg',
    downloadFileName: 'cool-logo',
  })
})

```

#### React + TypeScript Image Download
```tsx
import React from 'react'
import svg2Image from '@ferdipret/svg-2-img'


function Component() {
  const logoRef = useRef<SVGSVGElement>(null)

  const handleClick = () => {
    const svg = logoRef.current

    svg2Img(svg, {
      width: 300,
      height: 300,
      backgroundColor: 'red',
    })
  }

  return (
    <>
      <Logo ref={logoRef} />
      <button onClick={handleClick}>Download image</button>
    </>
  )
}

export default Component
```
