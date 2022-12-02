import React from 'react'
import { ChoosenPrivilegesProps } from './ChoosenPrivileges.types'
import * as S from './ChoosenPrivileges.styles'

export const ChoosenPrivileges = ({ privileges, emptyPrivilegesLabel }: ChoosenPrivilegesProps) => {
  if (privileges.length === 0) {
    return <S.EmptyPrivileges>{emptyPrivilegesLabel}</S.EmptyPrivileges>
  }
  return <S.Wrapper>
    {privileges.map(({ label, dephLevel }) => <>
      <S.Privilege dephLevel={dephLevel} >{label}</S.Privilege>
    </>)}
  </S.Wrapper>
}