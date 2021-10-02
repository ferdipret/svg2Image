<h1 align="center">
  <img src="https://raw.githubusercontent.com/ferdipret/svg2Image/main/resources/svg2image-logo.png" alt="svg2Image" title="svg2Image" width="300">
</h1>
<p align="center" style="font-size: 1.2rem;">Makes downloading SVGs as raster graphics images a breeze.</p>

---

## Example

```ts
function Component() {
  const logoRef = useRef<SVGSVGElement>(null)

  const handleClick = () => {
    const svg = logoRef.current

    svg2Image(svg)
  }

  return (
    <>
      <Logo ref={logoRef} />
      <button onClick={handleClick}>Download image</button>
    </>
  )
}
```
