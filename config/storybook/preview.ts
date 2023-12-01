import type { Preview } from '@storybook/react'
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator'
import BrowserRouterDecorator from '../../src/shared/config/storybook/BrowserRouterDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'

// include global styles
import '../../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    BrowserRouterDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
