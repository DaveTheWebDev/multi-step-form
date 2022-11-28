import React from 'react'
import { Step } from '../../atoms/Step/Step'
import { OverviewProps } from './Overview.types'
import * as S from './Overview.styles'
import { InfoSection } from '../../atoms/InfoSection/InfoSection'

export const Overview = ({ sections }: OverviewProps) => {
  return <Step>
    {sections.map(({ content, title }) => <InfoSection title={title}>{content}</InfoSection>)}
  </Step>
}