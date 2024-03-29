import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import { ArticleListView } from '../../model/consts/consts'

import ToggleItemsView from './ToggleItemsView'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'entities/Article/ToggleItemsView',
  component: ToggleItemsView,
  tags: ['autodocs']
} satisfies Meta<typeof ToggleItemsView>

export default meta
type Story = StoryObj<typeof meta>

export const List: Story = {
  args: {
    view: ArticleListView.SMALL
  }
}

export const ListDark: Story = {
  args: {
    view: ArticleListView.SMALL
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Tile: Story = {
  args: {
    view: ArticleListView.BIG
  }
}

export const TileDark: Story = {
  args: {
    view: ArticleListView.BIG
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
