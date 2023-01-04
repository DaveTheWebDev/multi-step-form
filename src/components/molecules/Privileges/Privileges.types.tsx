import { IPrivilege, IPrivilegeCheckboxStates, ICategory } from "mocks/privileges/privileges.model";
import { TChoosePrivilege } from "components/context/MultiStepForm/MultiStepFormCtx.types";

export interface PrivilegesProps {
  categories: ICategory[]
  choosePrivilege: TChoosePrivilege
  resetPrivileges: () => void
  privilegeCheckboxesState: IPrivilegeCheckboxStates
  setStepNumber: () => void
  privileges: IPrivilege[]
  selectedCompanyName: string
  selectedCompanyId: string
}
