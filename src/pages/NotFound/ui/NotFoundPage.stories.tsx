import type { Meta, StoryObj } from '@storybook/react'
import NotFoundPage from './NotFoundPage'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs']
} satisfies Meta<typeof NotFoundPage>

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
