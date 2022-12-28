import { IChosenPrivilege, IPrivileges } from "../../../mocks/privileges.model";

export interface PrivilegesProps {
  privileges: IPrivileges[]
  saveButtonLabel: string;
  clearButtonLabel: string;
  sectionLabel: string;
  selectedCategoryLabel: string;
  selectedCategoryDivider: string;
  choosePrivilege: (depthLevel: number, label: string, category: string, chosenPrivileges: IChosenPrivilege[]) => () => void;
  resetPrivileges: () => void
  chosenPrivileges: IChosenPrivilege[]
  setStepNumber: () => void
}
