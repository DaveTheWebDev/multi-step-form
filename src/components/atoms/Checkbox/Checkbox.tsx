import React from 'react'
import { CheckboxProps } from './Checkbox.types'
import { Checkmark } from './Checkmark/Checkmark'
import * as S from './Checkbox.styles'

export const Checkbox = ({ isChecked, isDisabled, name, id, label }: CheckboxProps) => {
  return <S.Wrapper>
    <S.Input type='checkbox' isChecked={isChecked} isDisabled={isDisabled} name={name} id={id} />
    <S.Label htmlFor={id}>{label}</S.Label>
    {isChecked && <Checkmark />}
  </S.Wrapper>
}