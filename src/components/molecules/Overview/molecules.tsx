import React from 'react'
import { Step } from '../../atoms/Step/Step'
import { OverviewProps } from './Overview.types'
import { InfoSection } from '../../atoms/InfoSection/InfoSection'
import * as S from './Overview.styles'
import { Button } from '../../atoms/Button/Button'

export const Overview = ({ sections, setStepNumber, buttonLabel }: OverviewProps) => {
  return <Step>
    {sections.map(({ children, title }) => <InfoSection title={title}>{children}</InfoSection>)}
    <Button variant='primary' onClick={setStepNumber}>{buttonLabel}</Button>
  </Step>
}