import { IPrivilegeCheckboxStates, IPrivilege } from "mocks/privileges/privileges.model";

export enum Steps {
  OVERVIEW,
  PRIVILEGES
}

export type TChoosePrivilege = (chosenPrivileges: IPrivilegeCheckboxStates, rawPrivileges: IPrivilege[], clickedId: number) => () => void

export interface IMultiStepsFormState {
  currentStep: number;
  setStepNumber: (nextStep: Steps) => () => void;
  privilegeCheckboxesState: IPrivilegeCheckboxStates
  choosePrivilege: TChoosePrivilege;
  resetPrivileges: () => void
}