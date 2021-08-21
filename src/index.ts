type Callback = (imgData: string) => void

type Options = {
  width?: number
  height?: number
  format?: string
  backgroundColor?: string
}

type SvgString2Image = (
  svgElement: SVGElement,
  options: Options,
  callback: Callback,
) => void

/**
 *
 * @param svgElement - The svg element that will get turned into an image.
 * @param options -
 * @param callback
 */
const svgString2Image: SvgString2Image = (svgElement, options, callback) => {
  const {
    width = 100,
    height = 100,
    format = 'png',
    backgroundColor: userDefinedBackgroundColor,
  } = options
  const svgEl = svgElement
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!
  const { backgroundColor: existingBackgroundColor } = svgEl.style

  svgEl.style.backgroundColor =
    userDefinedBackgroundColor || existingBackgroundColor || 'white'
  const xml = new XMLSerializer().serializeToString(svgEl)

  const imgSrc = `data:image/svg+xml;base64,${btoa(
    unescape(encodeURIComponent(xml)),
  )}`

  const image = new Image()

  canvas.width = width
  canvas.height = height

  image.onload = () => {
    context.clearRect(0, 0, width, height)
    context.drawImage(image, 0, 0, width, height)

    const imgData = canvas.toDataURL(`image/${format}`)

    callback(imgData)
  }

  image.src = imgSrc
}

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

svgString2Image(svg, {}, img => {
  console.log(img)
})
