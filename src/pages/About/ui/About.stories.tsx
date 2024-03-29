import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'

import About from './About'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/About',
  component: About,
  tags: ['autodocs']
} satisfies Meta<typeof About>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [ReduxStoreDecorator({})]
}

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}
