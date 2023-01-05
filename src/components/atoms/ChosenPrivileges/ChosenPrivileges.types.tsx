import { ICategory, IPrivilege, IPrivilegeCheckboxStates } from "mocks/privileges/privileges.model";

export interface ChosenPrivilegesProps {
  privilegeCheckboxesState: IPrivilegeCheckboxStates
  emptyPrivilegesLabel: string;
  privileges: IPrivilege[]
  categories: ICategory[]
}
