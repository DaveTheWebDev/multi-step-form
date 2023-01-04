import React, { createContext, useCallback, useContext, useState } from "react"
import { CheckboxState, IPrivilegeCheckboxStates, IPrivilege } from "mocks/privileges/privileges.model"
import { defaultState } from "./MultiStepFormCtx.state"
import { IMultiStepsFormState, Steps } from "./MultiStepFormCtx.types"

const MultiStepsFormCtx = createContext<IMultiStepsFormState | undefined>(undefined)

export const useMultiStepsForm = () => {
  const multiStepFromContext = useContext(MultiStepsFormCtx)

  if (!multiStepFromContext) {
    throw new Error('Component beyond MultiStepsFormCtx!')
  }

  return multiStepFromContext
}


export const MultiStepsFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(Steps.PRIVILEGES)
  const [privilegeCheckboxesState, setPrivilegeCheckboxesState] = useState<IPrivilegeCheckboxStates>(defaultState)

  const setStepNumber = useCallback((nextStep: Steps) => () => {
    if (nextStep < Steps.OVERVIEW) {
      throw new Error("Next step number can not be lower than 0");
    }
    setCurrentStep(nextStep)
  }, [])

  const updateChosenPrivileges = (chosenPrivileges: IPrivilegeCheckboxStates, rawPrivileges: IPrivilege[], clickedId: number) => {
    const chosenPrivilegesCopy = chosenPrivileges.map((chosenPrivilege) => ({ ...chosenPrivilege }));

    const getCheckboxState = (id: number) => {
      return chosenPrivilegesCopy.find((chosenPrivilege) => chosenPrivilege.id === id)!.state;
    };

    // setters
    const updateParent = (id: number) => {
      const privilege = rawPrivileges.find((rawPrivilege) => rawPrivilege.id === id);
      if (!privilege || !privilege.parentId) return;

      const parentPrivilege = rawPrivileges.find((rawPrivilege) => rawPrivilege.id === privilege.parentId);
      if (!parentPrivilege) return;

      const childIds = rawPrivileges.filter((rawPrivilege) => rawPrivilege.parentId === parentPrivilege.id).map((child) => child.id);
      const childStates = childIds.map((childId) => getCheckboxState(childId));

      if (childStates.length === childStates.filter((s) => s === CheckboxState.UNCHECKED).length) {
        chosenPrivilegesCopy.find((i) => i.id === parentPrivilege.id)!.state = CheckboxState.UNCHECKED;
      } else {
        chosenPrivilegesCopy.find((chosenPrivilege) => chosenPrivilege.id === parentPrivilege.id)!.state = CheckboxState.CHECKED;
      }

      updateParent(parentPrivilege.id);
    };

    const setUnchecked = (id: number) => {
      chosenPrivilegesCopy.find((chosenPrivilege) => chosenPrivilege.id === id)!.state = CheckboxState.UNCHECKED;

      rawPrivileges
        .filter((privilege) => privilege.parentId === id)
        .map((privilege) => privilege.id)
        .forEach((childId) => setUnchecked(childId));
      updateParent(id);
    };

    const setChecked = (id: number) => {
      chosenPrivilegesCopy.find((chosenPrivilege) => chosenPrivilege.id === id)!.state = CheckboxState.CHECKED;

      rawPrivileges
        .filter((privilege) => privilege.parentId === id)
        .map((privilege) => privilege.id)
        .forEach((childId) => setChecked(childId));
      updateParent(id);
    };

    const privilegeCheckboxState = getCheckboxState(clickedId);
    privilegeCheckboxState === CheckboxState.CHECKED ? setUnchecked(clickedId) : setChecked(clickedId)

    return chosenPrivilegesCopy;
  };


  const choosePrivilege = useCallback((chosenPrivileges: IPrivilegeCheckboxStates, rawPrivileges: IPrivilege[], clickedId: number) => () => setPrivilegeCheckboxesState(updateChosenPrivileges(chosenPrivileges, rawPrivileges, clickedId)), [])

  const resetPrivileges = useCallback(() => {
    setPrivilegeCheckboxesState(defaultState)
  }, [])

  return <MultiStepsFormCtx.Provider value={{ currentStep, privilegeCheckboxesState, setStepNumber, choosePrivilege, resetPrivileges }}>
    {children}
  </MultiStepsFormCtx.Provider>
}