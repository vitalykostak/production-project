import { type Preview } from '@storybook/react'

import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator'
import BrowserRouterDecorator from '../../src/shared/config/storybook/BrowserRouterDecorator'
import SuspenseDecorator from '../../src/shared/config/storybook/SuspenseDecorator'
import { Theme } from '../../src/shared/consts/theme'
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
    ThemeDecorator(Theme.LIGHT),
    SuspenseDecorator
  ]
}

export default preview
