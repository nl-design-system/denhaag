import { createMuiTheme } from '@material-ui/core'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    themeName: string
  }
  interface ThemeOptions {
    themeName?: string
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    nlds: PaletteColor
  }
  interface PaletteOptions {
    nlds: PaletteOptions['primary']
  }
}

export const palette = {
  nlds: {
    main: '#00843f',
    dark: '#3f51b5',
    light: '#dddddd'
  }
}

export const bonkTheme = createMuiTheme({
  themeName: 'Pink Guy 2',
  palette: palette
})
