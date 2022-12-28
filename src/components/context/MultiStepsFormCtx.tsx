import React, { createContext, useCallback, useContext, useState } from "react"
import { IChosenPrivilege } from "../../mocks/privileges.model"
import { IMultiStepsFormState } from "./MultiStepsFormCtx.types"

//undefined, żeby wykryć czy komponent jest poza kontekstem
const MultiStepsFormCtx = createContext<IMultiStepsFormState | undefined>(undefined)

export const useMultiStepsForm = () => {
  const ctx = useContext(MultiStepsFormCtx)

  if (!ctx) {
    throw new Error('Component beyond MultiStepsFormCtx!')
  }

  return ctx
}


export const MultiStepsFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [chosenPrivileges, setChosenPrivileges] = useState<IChosenPrivilege[]>([])
  const setStepNumber = useCallback((nextStep: number) => () => {
    if (nextStep < 0) {
      throw new Error("Next step number can not be lower than 0");
    }
    setCurrentStep(nextStep)
  }, [])


  const choosePrivilege = useCallback((depthLevel: number, label: string, category: string, chosenPrivileges: IChosenPrivilege[]) => () => {
    const chosenPrivilegesIndex = chosenPrivileges.findIndex(
      chosenPrivilege => chosenPrivilege.label === label &&
        chosenPrivilege.depthLevel === depthLevel &&
        chosenPrivilege.category === category)
    if (chosenPrivilegesIndex !== -1) {
      const chosenPrivilegesCopy = [...chosenPrivileges]
      chosenPrivilegesCopy.splice(chosenPrivilegesIndex, 1)
      setChosenPrivileges(chosenPrivilegesCopy)
      return;
    }
    setChosenPrivileges(prev => [...prev, { depthLevel, label, category }])
  }, [])

  const resetPrivileges = useCallback(() => {
    setChosenPrivileges([])
  }, [])

  return <MultiStepsFormCtx.Provider value={{ currentStep, chosenPrivileges, setStepNumber, choosePrivilege, resetPrivileges }}>
    {children}
  </MultiStepsFormCtx.Provider>
}