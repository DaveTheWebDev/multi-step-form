import { IPrivilege, IPrivilegeCheckboxStates } from "mocks/privileges/privileges.model";

export interface PrivilegesListProps {
  privileges: IPrivilege[];
  idsToRender?: number[];
  privilegeCheckboxesState: IPrivilegeCheckboxStates
}
