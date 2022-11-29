import React from 'react'
import { ChoosenPreferencesProps } from './ChoosenPreferences.types'
import * as S from './ChoosenPreferences.styles'

export const ChoosenPreferences = ({ preferences }: ChoosenPreferencesProps) => {
  return <S.Wrapper>
    {preferences.map(({ preference, subpreference }) => <>
      <S.Preference>{preference}</S.Preference>
      {subpreference && <ChoosenPreferences preferences={subpreference} />}
    </>)}
  </S.Wrapper>
}