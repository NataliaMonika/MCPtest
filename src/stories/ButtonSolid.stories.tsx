import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ButtonSolid from '../components/ButtonSolid'

const meta: Meta<typeof ButtonSolid> = {
  title: 'Components/ButtonSolid',
  component: ButtonSolid,
}

export default meta

type Story = StoryObj<typeof ButtonSolid>

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
    size: 'md',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <ButtonSolid label="Primary" type="primary" size="md" />
      <ButtonSolid label="Secondary" type="secondary" size="md" />
      <ButtonSolid label="Error" type="error" size="md" />
      <ButtonSolid label="Success" type="success" size="md" />
    </div>
  ),
}
