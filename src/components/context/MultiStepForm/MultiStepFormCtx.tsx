import React, { createContext, useCallback, useContext, useState } from "react";
import { IPrivilegeCheckboxStates, IPrivilege } from "mocks/privileges/privileges.model";
import { defaultState } from "./MultiStepFormCtx.state";
import { IMultiStepsFormState, Steps } from "./MultiStepFormCtx.types";
import { updateChosenPrivileges } from "./utils";

const MultiStepsFormCtx = createContext<IMultiStepsFormState | undefined>(undefined);

export const useMultiStepsForm = () => {
	const multiStepFromContext = useContext(MultiStepsFormCtx);

	if (!multiStepFromContext) {
		throw new Error("Component beyond MultiStepsFormCtx!");
	}

	return multiStepFromContext;
};


export const MultiStepsFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [currentStep, setCurrentStep] = useState(Steps.PRIVILEGES);
	const [privilegeCheckboxesState, setPrivilegeCheckboxesState] = useState<IPrivilegeCheckboxStates>(defaultState);

	const setStepNumber = useCallback((nextStep: Steps) => () => {
		if (nextStep < Steps.OVERVIEW) {
			throw new Error("Next step number can not be lower than 0");
		}
		setCurrentStep(nextStep);
	}, []);

	const choosePrivilege = useCallback((chosenPrivileges: IPrivilegeCheckboxStates, rawPrivileges: IPrivilege[], clickedId: number) => () =>
		setPrivilegeCheckboxesState(updateChosenPrivileges(chosenPrivileges, rawPrivileges, clickedId)), []);

	const resetPrivileges = useCallback(() => {
		setPrivilegeCheckboxesState(defaultState);
	}, []);

	return <MultiStepsFormCtx.Provider value={{ currentStep, privilegeCheckboxesState, setStepNumber, choosePrivilege, resetPrivileges }}>
		{children}
	</MultiStepsFormCtx.Provider>;
};