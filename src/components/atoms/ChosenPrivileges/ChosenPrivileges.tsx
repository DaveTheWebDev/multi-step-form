import React from 'react'
import { ChosenPrivilegesProps } from './ChosenPrivileges.types'
import * as S from './ChosenPrivileges.styles'

export const ChosenPrivileges = ({ privileges, emptyPrivilegesLabel }: ChosenPrivilegesProps) => {
  if (privileges.length === 0) {
    return <S.EmptyPrivileges>{emptyPrivilegesLabel}</S.EmptyPrivileges>
  }
  return <S.Wrapper>
    {privileges.map(({ label, depthLevel }) => <>
      <S.Privilege depthLevel={depthLevel} >{label}</S.Privilege>
    </>)}
  </S.Wrapper>
}