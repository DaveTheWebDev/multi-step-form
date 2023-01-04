import { IPrivilegeCheckboxStates, IPrivilege } from "mocks/privileges/privileges.model";

export interface OverviewProps {
  privilegeCheckboxesState: IPrivilegeCheckboxStates
  setStepNumber: () => void
  privileges: IPrivilege[];
  selectedCompanyName: string
  selectedCompanyId: string
}
