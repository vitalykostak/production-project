import '@/app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputWithValue: Story = {
  args: {
    value: 'Input'
  }
}

export const InputWithValueDark: Story = {
  args: {
    value: 'Input'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const InputWithPlaceholderValue: Story = {
  args: {
    value: 'password',
    placeholder: 'type Password'
  }
}

export const InputWithValuePlaceholderDark: Story = {
  args: {
    value: 'password',
    placeholder: 'type Password'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
