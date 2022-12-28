import { IChosenPrivilege } from "../../mocks/privileges.model";

export interface IMultiStepsFormState {
  currentStep: number;
  chosenPrivileges: IChosenPrivilege[]
  setStepNumber: (nextStep: number) => () => void;
  choosePrivilege: (depthLevel: number, label: string, category: string, chosenPrivileges: IChosenPrivilege[]) => () => void;
  resetPrivileges: () => void
}