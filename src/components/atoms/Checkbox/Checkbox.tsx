import React from 'react'
import { CheckboxProps } from './Checkbox.types'
import { Checkmark } from './Checkmark/Checkmark'
import * as S from './Checkbox.styles'

export const Checkbox = ({ isChecked, name, id, label, dephLevel, choosePrivilege }: CheckboxProps) => {
  return (
    <S.Wrapper dephLevel={dephLevel}>
      <S.Input onChange={choosePrivilege} type='checkbox' checked={isChecked} name={name} id={id} />
      <S.Label dephLevel={dephLevel} htmlFor={id} isChecked={isChecked}>{label}</S.Label>
      {isChecked && <Checkmark dephLevel={dephLevel} />}
    </S.Wrapper>
  )
}