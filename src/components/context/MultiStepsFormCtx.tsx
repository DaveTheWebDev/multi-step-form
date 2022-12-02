import React, { createContext, useCallback, useContext, useState } from "react"
import { IChoosenPrivilege } from "../../mocks/privileges.model"
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
  const [choosenPrivileges, setChoosenPrivileges] = useState<IChoosenPrivilege[]>([])
  const setStepNumber = useCallback((nextStep: number) => () => {
    if (nextStep < 0) {
      throw new Error("Next step number can not be lower than 0");
    }
    setCurrentStep(nextStep)
  }, [])


  const choosePrivilege = useCallback((dephLevel: number, label: string, category: string, choosenPrivileges: IChoosenPrivilege[]) => () => {
    const choosenPrivilegesIndex = choosenPrivileges.findIndex(
      choosenPrivilege => choosenPrivilege.label === label &&
        choosenPrivilege.dephLevel === dephLevel &&
        choosenPrivilege.category === category)
    if (choosenPrivilegesIndex !== -1) {
      const choosenPrivilegesCopy = [...choosenPrivileges]
      choosenPrivilegesCopy.splice(choosenPrivilegesIndex, 1)
      setChoosenPrivileges(choosenPrivilegesCopy)
      return;
    }
    setChoosenPrivileges(prev => [...prev, { dephLevel, label, category }])
  }, [])

  const resetPrivileges = useCallback(() => {
    setChoosenPrivileges([])
  }, [])

  return <MultiStepsFormCtx.Provider value={{ currentStep, choosenPrivileges, setStepNumber, choosePrivilege, resetPrivileges }}>
    {children}
  </MultiStepsFormCtx.Provider>
}