import React from 'react'
import { ButtonProps } from './Button.types'
import * as S from './Button.styles'

export const Button = ({ children, isSubmitButton, variant }: ButtonProps) => {
  return <S.Button type={isSubmitButton ? 'submit' : 'button'} variant={variant} >{children}</S.Button>
}