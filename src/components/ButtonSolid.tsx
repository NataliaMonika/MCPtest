import React from 'react'
import styled from '@emotion/styled'
import tokens from '../tokens/designTokens'
import { ReactComponent as IconPlaceholder } from '../icons/IconPlaceholder.svg'

type ButtonType = 'primary' | 'secondary' | 'error' | 'success'
type Size = 'sm' | 'md' | 'lg'
type ForcedState = 'default' | 'hover' | 'active' | 'focus' | 'selected'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  type?: ButtonType
  size?: Size
  /** force visual state for demo */
  forceState?: ForcedState
  selected?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const sizePx = (s: Size) => `${tokens.button.sizes[s]}px`

const getBackground = (t: ButtonType) => {
  switch (t) {
    case 'primary':
      return tokens.colors.primary
    case 'secondary':
      return '#e6eef9'
    case 'error':
      return tokens.colors.error
    case 'success':
      return '#16a34a'
    default:
      return tokens.colors.primary
  }
}

const getHoverBackground = (t: ButtonType) => {
  switch (t) {
    case 'primary':
      return tokens.colors.primaryHover
    case 'secondary':
      return '#d7e8ff'
    case 'error':
      return '#c62828'
    case 'success':
      return '#138043'
    default:
      return tokens.colors.primaryHover
  }
}

const StyledButton = styled.button<{
  t: ButtonType
  s: Size
  $force?: ForcedState
  $selected?: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  height: ${(p) => sizePx(p.s)};
  min-width: 64px;
  border-radius: ${tokens.button.radii}px;
  border: none;
  cursor: pointer;
  font-size: ${(p) => tokens.typography.labelSize.md}px;
  font-weight: ${tokens.typography.labelWeight};
  transition: background 120ms ease, transform 80ms ease;
  background: ${(p) => getBackground(p.t)};
  color: ${(p) => (p.t === 'primary' ? tokens.colors.textOnPrimary : '#0f172a')};
  box-shadow: ${(p) => (p.$selected ? 'inset 0 0 0 2px rgba(0,0,0,0.06)' : 'none')};

  &:hover {
    background: ${(p) => getHoverBackground(p.t)};
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* forced visual states for demo */
  ${(p) =>
    p.$force === 'hover' &&
    `background: ${getHoverBackground(p.t)};`}

  ${(p) => p.$force === 'active' && `transform: translateY(1px);`}

  ${(p) => p.$force === 'focus' && `box-shadow: 0 0 0 3px rgba(17,88,165,0.12);`}

  ${(p) => p.$force === 'selected' && `box-shadow: inset 0 0 0 2px rgba(0,0,0,0.08);`}
`

export default function ButtonSolid({
  label,
  type = 'primary',
  size = 'md',
  forceState,
  selected,
  leftIcon,
  rightIcon,
  ...rest
}: Props) {
  return (
    <StyledButton
      t={type}
      s={size}
      $force={forceState}
      $selected={!!selected}
      aria-pressed={selected}
      {...rest}
    >
      {leftIcon ? <span style={{ display: 'inline-flex', marginRight: 8 }}>{leftIcon}</span> : null}
      {label}
      {rightIcon ? <span style={{ display: 'inline-flex', marginLeft: 8 }}>{rightIcon}</span> : null}
    </StyledButton>
  )
}
