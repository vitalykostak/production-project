import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import AppLink from './AppLink'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: { to: '/', children: 'AppLink' },
    tags: ['autodocs'],
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
}
export const PrimaryDark: Story = {
    args: {
        variant: 'primary',
    },
    decorators: [ThemeDecorator(Theme.DARK, { isAppRedesigned: true })],
}

export const Red: Story = {
    args: {
        variant: 'red',
    },
}
export const RedDark: Story = {
    args: {
        variant: 'red',
    },
    decorators: [ThemeDecorator(Theme.DARK, { isAppRedesigned: true })],
}
