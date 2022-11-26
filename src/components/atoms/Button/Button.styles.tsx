import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const primary = css`
  padding: 11px 24px 13px;
  border-radius: 4px;

  color: #FFFFFF;
  background-color: #0878A1;

`
const dangerous = css`
  color: #FF0D0D;

  text-decoration: underline;
`




const Button = styled.button<ButtonProps>`
  border: none;
  
  background-color: transparent;

  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

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