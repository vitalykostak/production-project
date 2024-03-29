import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'
import { type StateSchema } from '@/app/providers/StoreProvider'

import ArticlesPage from './ArticlesPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

const state: DeepPartial<StateSchema> = {
    user: {
        authData: {
            jsonSettings: {
                hasArticlesPageBeenOpened: true,
            },
        },
    },
    articlesPage: {},
}

export const Primary: Story = {
    args: {},
    decorators: [ReduxStoreDecorator(state)],
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator(state)],
}
