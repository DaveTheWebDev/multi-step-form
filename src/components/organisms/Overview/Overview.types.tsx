import { IPrivilegeCheckboxStates, IPrivilege, ICategory } from "mocks/privileges/privileges.model";

export interface OverviewProps {
  privilegeCheckboxesState: IPrivilegeCheckboxStates
  setStepNumber: () => void
  privileges: IPrivilege[];
  categories: ICategory[];
  selectedCompanyName: string
  selectedCompanyId: string
}
