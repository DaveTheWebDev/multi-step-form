import React from 'react'
import { Step } from '../../atoms/Step/Step'
import { PrivilegesProps } from './Privileges.types'
import { InfoSection } from '../../atoms/InfoSection/InfoSection'
import * as S from './Privileges.styles'
import { Button } from '../../atoms/Button/Button'
import { Accordion } from '../../atoms/Accordion/Accordion'
import { Checkbox } from '../../atoms/Checkbox/Checkbox'
import { SelectedCompany } from '../../atoms/SelectedCompany/SelectedCompany'

export const Privileges = ({ clearButtonLabel, saveButtonLabel, sectionLabel, privileges, choosePrivilege, chosenPrivileges, selectedCategoryDivider, selectedCategoryLabel, resetPrivileges, setStepNumber }: PrivilegesProps) => {
  return <Step>
    <S.SectionTitle>{sectionLabel}</S.SectionTitle>
    <InfoSection title='Selected company' children={<SelectedCompany companyName='Company XYZ' id='1-2300423445' />} />
    <S.Divider />
    {privileges.map(({ category, privileges }, i) => {
      const selectedInCategory = chosenPrivileges.filter(chosenPrivilege => chosenPrivilege.category === category).length
      const allInCategory = privileges.reduce((acc, privileges) => {
        acc += 1
        if (privileges.subprivileges) {
          acc += privileges.subprivileges.length
        }
        return acc
      }, 0)
      const accordionSubtitle = `${selectedInCategory} ${selectedCategoryDivider} ${allInCategory} ${selectedCategoryLabel}`
      return (
        <Accordion key={category} title={category} subtitle={accordionSubtitle} index={i}>
          {privileges.map(({ label, name, subprivileges }, i) =>
          (
            <div key={label + name}>
              <Checkbox key={label}
                choosePrivilege={choosePrivilege(i, label, category, chosenPrivileges)}
                isChecked={!!chosenPrivileges.find(chosenPrivilege => chosenPrivilege.label === label)}
                label={label}
                name={name}
                id={label}
                depthLevel={i}
              />
              {subprivileges?.map(({ label, name }) =>
                <Checkbox
                  key={label}
                  choosePrivilege={choosePrivilege(i, label, category, chosenPrivileges)}
                  isChecked={!!chosenPrivileges.find(chosenPrivilege => chosenPrivilege.label === label)}
                  label={label}
                  name={name}
                  id={label}
                  depthLevel={i} />)}
            </div>
          )
          )}

        </Accordion>
      )
    })}
    <S.ButtonWrapper>
      <Button variant='primary' onClick={setStepNumber}>{saveButtonLabel}</Button>
      <Button variant='dangerous' onClick={resetPrivileges}>{clearButtonLabel}</Button>
    </S.ButtonWrapper>
  </Step>
}