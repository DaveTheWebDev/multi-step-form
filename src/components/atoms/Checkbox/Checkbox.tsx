import React from 'react'
import { CheckboxProps } from './Checkbox.types'
import * as S from './Checkbox.styles'
import { Checkmark } from './Checkmark/Checkmark'

export const Checkbox = ({ isChecked, isDisabled, name, id, label }: CheckboxProps) => {
  return <S.Wrapper>
    <S.Input type='checkbox' isChecked={isChecked} isDisabled={isDisabled} name={name} id={id} />
    <S.Label htmlFor={id}>{label}</S.Label>
    {isChecked && <Checkmark />}
  </S.Wrapper>
}