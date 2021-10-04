type Options = {
  width?: number
  height?: number
  format?: 'png' | 'jpeg' | 'jpg'
  backgroundColor?: string
  download?: boolean
  downloadFileName?: string
}

type Svg2Image = (
  svgElement: SVGElement | SVGSVGElement,
  options?: Options,
) => Promise<string>

const svg2Image: Svg2Image = (svgElement, options = {}) => {
  const {
    width,
    height,
    format = 'png',
    download = true,
    downloadFileName = 'image',
    backgroundColor: userDefinedBackgroundColor,
  } = options

  return new Promise((resolve, reject) => {
    try {
      const svgEl = svgElement.cloneNode(true) as SVGElement | SVGSVGElement
      const viewBox = svgEl.getAttribute('viewBox')?.split(' ')

      const svgWidth = viewBox
        ? width || parseInt(viewBox[2], 10)
        : width || 250

      const svgHeight = viewBox
        ? height || parseInt(viewBox[3], 10)
        : height || 250

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

      canvas.width = svgWidth
      canvas.height = svgHeight

      image.onload = () => {
        context.clearRect(0, 0, svgWidth, svgHeight)
        context.drawImage(image, 0, 0, svgWidth, svgHeight)

        const imgData = canvas.toDataURL(`image/${format}`)

        if (download) {
          const downloadBtn = document.createElement('a')

          downloadBtn.setAttribute('href', imgData)
          downloadBtn.setAttribute('download', `${downloadFileName}.${format}`)
          downloadBtn.click()
        }
        resolve(imgData)
      }

      image.src = imgSrc
    } catch (error) {
      reject(error)
    }
  })
}

export default svg2Image
