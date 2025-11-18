import React from 'react'
import styled from '@emotion/styled'
import tokens from '../tokens/designTokens'

type ButtonType = 'primary' | 'secondary' | 'error' | 'success'
type Size = 'sm' | 'md' | 'lg'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  type?: ButtonType
  size?: Size
}

const sizePx = (s: Size) => `${tokens.button.sizes[s]}px`

const StyledButton = styled.button<{ t: ButtonType; s: Size }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: ${(p) => sizePx(p.s)};
  border-radius: ${tokens.button.radii}px;
  border: none;
  cursor: pointer;
  font-size: ${tokens.typography.labelSize.md}px;
  font-weight: ${tokens.typography.labelWeight};
  background: ${(p) => (p.t === 'primary' ? tokens.colors.primary : '#e6eef9')};
  color: ${(p) => (p.t === 'primary' ? tokens.colors.textOnPrimary : '#0f172a')};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default function ButtonSolid({ label, type = 'primary', size = 'md', ...rest }: Props) {
  return (
    <StyledButton t={type} s={size} {...rest}>
      {label}
    </StyledButton>
  )
}
