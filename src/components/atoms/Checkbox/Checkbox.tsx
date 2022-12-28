import React from 'react'
import { CheckboxProps } from './Checkbox.types'
import { Checkmark } from '../Icons/Checkmark/Checkmark'
import * as S from './Checkbox.styles'

export const Checkbox = ({ isChecked, name, id, label, depthLevel, choosePrivilege }: CheckboxProps) => {
  return (
    <S.Wrapper depthLevel={depthLevel}>
      <S.Input onChange={choosePrivilege} type='checkbox' checked={isChecked} name={name} id={id} />
      <S.Label depthLevel={depthLevel} htmlFor={id} isChecked={isChecked}>{label}</S.Label>
      {isChecked && <Checkmark depthLevel={depthLevel} />}
    </S.Wrapper>
  )
}