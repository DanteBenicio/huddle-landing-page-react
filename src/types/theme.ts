export type ThemeProps = {
  colors: {
    primary: string
    veryPaleCyan: string
    veryDarkCyan: string
    grayishBlue: string
  },
  heading: {
    font: string
    weight: string
  },
  body: {
    font: string
    weight: {
      default: string
      large: string
    }
  }
}
