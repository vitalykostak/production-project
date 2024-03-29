import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import { COUNTRY } from '../../model/consts/country'

import CountrySelect from './CountrySelect'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'entities/Country/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        value: COUNTRY.UKRAINE,
    },
}
export const PrimaryDark: Story = {
    args: {
        value: COUNTRY.UKRAINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
