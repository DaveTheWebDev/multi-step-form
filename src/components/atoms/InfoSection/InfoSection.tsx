import React from 'react'
import { InfoSectionProps } from './InfoSection.types'
import * as S from './InfoSection.styles'

export const InfoSection = ({ content, title }: InfoSectionProps) => {
  return <S.Wrapper >
    <S.Title>{title}</S.Title>
    {content}
  </S.Wrapper>
}