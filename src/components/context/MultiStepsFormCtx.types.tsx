import { IChoosenPrivilege } from "../../mocks/privileges.model";

export interface IMultiStepsFormState {
  currentStep: number;
  choosenPrivileges: IChoosenPrivilege[]
  setStepNumber: (nextStep: number) => () => void;
  choosePrivilege: (dephLevel: number, label: string, category: string, choosenPrivileges: IChoosenPrivilege[]) => () => void;
  resetPrivileges: () => void
}