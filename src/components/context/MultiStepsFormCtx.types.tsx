export interface IMultiStepsFormState {
  currentStep: number;
  setStepNumber: (nextStep: number, array: unknown[]) => () => void
}