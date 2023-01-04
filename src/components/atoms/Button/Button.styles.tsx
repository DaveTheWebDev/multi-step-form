import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

const primary = css`
  padding: 11px 24px 13px;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  
`
const dangerous = css`
  color: ${({ theme }) => theme.colors.error};

  text-decoration: underline;
`

const Button = styled.button<ButtonProps>`
  border: none;
  
  background-color: transparent;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return primary
      case 'dangerous':
        return dangerous
    }
  }}
`

export { Button }