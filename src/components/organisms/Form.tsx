import React from "react";
import { useMultiStepsForm } from "components/context/MultiStepForm/MultiStepFormCtx";
import { Overview, Privileges } from "components/molecules";
import { privileges, categories } from "mocks/privileges/privileges.mock";
import { Steps } from "components/context/MultiStepForm/MultiStepFormCtx.types";
import * as S from "./Form.styles";



function Form() {
	const {
		privilegeCheckboxesState,
		choosePrivilege,
		resetPrivileges,
		currentStep,
		setStepNumber
	} = useMultiStepsForm();
	return (
		<S.FormWrapper className="App">
			{currentStep === Steps.OVERVIEW && <Overview
				setStepNumber={setStepNumber(Steps.PRIVILEGES)}
				privilegeCheckboxesState={privilegeCheckboxesState}
				privileges={privileges}
				categories={categories}
				selectedCompanyName='Company XYZ'
				selectedCompanyId='1-2300423445'
			/>
			}

			{currentStep === Steps.PRIVILEGES && <Privileges
				categories={categories}
				privileges={privileges}
				privilegeCheckboxesState={privilegeCheckboxesState}
				choosePrivilege={choosePrivilege}
				resetPrivileges={resetPrivileges}
				setStepNumber={setStepNumber(Steps.OVERVIEW)}
				selectedCompanyName='Company XYZ'
				selectedCompanyId='1-2300423445'
			/>
			}
		</S.FormWrapper>
	);
}

export default Form;
