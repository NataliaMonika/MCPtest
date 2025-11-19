import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ButtonSolid from '../components/ButtonSolid'

const meta: Meta<typeof ButtonSolid> = {
  title: 'Components/ButtonSolid',
  component: ButtonSolid,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'success'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    forceState: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'focus', 'selected'],
    },
    disabled: { control: 'boolean' },
    selected: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof ButtonSolid>

export const Playground: Story = {
  args: {
    label: 'Button',
    type: 'primary',
    size: 'md',
    forceState: 'default',
    disabled: false,
    selected: false,
  },
}

export const AllVariants: Story = {
  render: () => {
    const TYPES = ['primary', 'secondary', 'error', 'success'] as const
    const SIZES = ['sm', 'md', 'lg'] as const
    const STATES = ['default', 'hover', 'active', 'selected', 'disabled'] as const

    return (
      <div style={{ display: 'grid', gap: 20 }}>
        {SIZES.map((size) => (
          <div key={size}>
            <h4 style={{ margin: '6px 0' }}>Size: {size}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, alignItems: 'center' }}>
              <div style={{ fontWeight: 700 }}>Default</div>
              <div style={{ fontWeight: 700 }}>Hover</div>
              <div style={{ fontWeight: 700 }}>Active</div>
              <div style={{ fontWeight: 700 }}>Selected</div>
              <div style={{ fontWeight: 700 }}>Disabled</div>
              {TYPES.map((t) => (
                <React.Fragment key={t}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <ButtonSolid label={t} type={t} size={size} />
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <ButtonSolid label={t} type={t} size={size} forceState="hover" />
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <ButtonSolid label={t} type={t} size={size} forceState="active" />
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <ButtonSolid label={t} type={t} size={size} forceState="selected" selected />
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <ButtonSolid label={t} type={t} size={size} disabled />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
