import React from 'react'
import { AccordionProps } from './Accordion.types'
import { ArrowIcon } from './Arrow/ArrowIcon'
import * as S from './Accordion.styles'

export const Accordion = ({ children, subtitle, title, isExpanded }: AccordionProps) => {
  return <S.Wrapper isExpanded={isExpanded}>
    <S.Title>{title} <span>{subtitle}</span></S.Title>
    <ArrowIcon />
    {children}
  </S.Wrapper>
}