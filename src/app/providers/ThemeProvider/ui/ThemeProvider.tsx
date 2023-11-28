import { type FC, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_UI_THEME_KEY,
  Theme,
  ThemeContext
} from '../lib/ThemeContext'

interface Props {
  children: React.ReactNode
  initialTheme?: Theme
}

const defaultTheme = localStorage?.getItem(LOCAL_STORAGE_UI_THEME_KEY) as Theme
document.body.className = defaultTheme

const ThemeProvider: FC<Props> = (props) => {
  const { children, initialTheme } = props

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT
  )

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
