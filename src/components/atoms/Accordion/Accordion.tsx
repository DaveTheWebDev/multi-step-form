import React from 'react'
import { AccordionProps } from './Accordion.types'
import { ArrowIcon } from './Arrow/ArrowIcon'
import * as S from './Accordion.styles'
import { useAccordion } from './Accordion.hooks'

export const Accordion = ({ children, subtitle, title, index }: AccordionProps) => {
  const { isExpanded, toggleExpanded } = useAccordion(index)
  return (
    <S.Wrapper>
      <legend onClick={toggleExpanded}><S.Title aria-expanded={isExpanded}>{title} <span>{subtitle}</span></S.Title></legend>
      <ArrowIcon onClick={toggleExpanded} isExpanded={isExpanded} />
      <S.Panel isExpanded={isExpanded}>
        {children}
      </S.Panel>
    </S.Wrapper>
  )
}