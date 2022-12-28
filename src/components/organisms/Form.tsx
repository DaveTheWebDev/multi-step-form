import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ChosenPrivileges } from '../atoms/ChosenPrivileges/ChosenPrivileges';
import { SelectedCompany } from '../atoms/SelectedCompany/SelectedCompany';
import { useMultiStepsForm } from '../context/MultiStepsFormCtx';
import { Overview } from '../molecules/Overview/molecules';
import { Privileges } from '../molecules/Privileges/Privileges';
import { privileges } from '../../mocks/privileges.mock';

const STEPS = {
  OVERVIEW: 0,
  PRIVILEGES: 1
}

function Form() {
  const { choosePrivilege, chosenPrivileges, resetPrivileges, currentStep, setStepNumber } = useMultiStepsForm()
  console.log(currentStep)
  return (
    <div className="App" style={{ backgroundColor: 'gray', width: '100vw', height: '400vh' }}>
      {currentStep === 0 && <Overview sections={[
        { title: 'Selected company', children: <SelectedCompany companyName='Company XYZ' id='1-2300423445' /> },
        { title: 'Chosen preferences:', children: <ChosenPrivileges privileges={chosenPrivileges} emptyPrivilegesLabel='You don’t have any preferences chosen.' /> }]} buttonLabel='Add preferences' setStepNumber={setStepNumber(STEPS.PRIVILEGES)} />}

      {currentStep === 1 && <Privileges
        clearButtonLabel='Remove access'
        saveButtonLabel='Save & Close'
        sectionLabel='Edit user’s privileges for a company'
        selectedCategoryDivider='of'
        selectedCategoryLabel='services selected'
        privileges={privileges}
        chosenPrivileges={chosenPrivileges}
        choosePrivilege={choosePrivilege}
        resetPrivileges={resetPrivileges}
        setStepNumber={setStepNumber(STEPS.OVERVIEW)}
      />}

    </div>
  );
}

export default Form;
