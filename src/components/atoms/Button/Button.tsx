import React from 'react'
import { ButtonProps } from './Button.types'
import * as S from './Button.styles'

export const Button = ({ children, isSubmitButton, variant, onClick, style }: ButtonProps) => {
  return (
    <S.Button style={style} onClick={onClick} type={isSubmitButton ? 'submit' : 'button'} variant={variant} >
      {children}
    </S.Button>)
}