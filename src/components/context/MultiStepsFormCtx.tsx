import React, { createContext, useCallback, useContext, useState } from "react"
import { privileges } from "../../mocks/privileges.mock"
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
  const [choosenPrivileges, setChoosenPrivileges] = useState(privileges)
  const setStepNumber = useCallback((nextStep: number, array: unknown[]) => () => {
    if (nextStep < 0) {
      throw new Error("Next step number can not be lower than 0");
    }
    if (nextStep > array.length - 1) {
      throw new Error("Next step number can not be higer than steps sum");
    }
    setCurrentStep(nextStep)
  }, [])
  return <MultiStepsFormCtx.Provider value={{ currentStep, setStepNumber }}>
    {children}
  </MultiStepsFormCtx.Provider>
}