import React from 'react'
import { Step } from '../../atoms/Step/Step'
import { PrivilegesProps } from './Privileges.types'
import { InfoSection } from '../../atoms/InfoSection/InfoSection'
import * as S from './Privileges.styles'
import { Button } from '../../atoms/Button/Button'
import { Accordion } from '../../atoms/Accordion/Accordion'
import { Checkbox } from '../../atoms/Checkbox/Checkbox'

export const Privileges = ({ clearButtonLabel, saveButtonLabel, priviliges }: PrivilegesProps) => {
  return <Step>
    {priviliges.map(({ category, privileges }) => (
      <Accordion title={category} isExpanded subtitle='DADAS'>
        <>{privileges.map(({ label, name, subprivileges }) => <Checkbox isChecked isDisabled label={label} name={name} id={label} ></Checkbox>)}</>
      </Accordion>
    ))}
    <Button variant='primary'>{saveButtonLabel}</Button>
    <Button variant='dangerous'>{clearButtonLabel}</Button>
  </Step>
}