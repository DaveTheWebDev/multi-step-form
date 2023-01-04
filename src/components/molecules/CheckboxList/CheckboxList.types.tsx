import { TChoosePrivilege } from "components/context/MultiStepForm/MultiStepFormCtx.types";
import { IPrivilege, IPrivilegeCheckboxStates, CheckboxState } from "mocks/privileges/privileges.model";

export interface CheckboxListProps {
  choosePrivilege: TChoosePrivilege
  privilegesInCategory: IPrivilege[];
  idsToRender?: number[];
  depthLevel?: number;
  getStateForId: (id: number) => CheckboxState;
  chosenPrivileges: IPrivilegeCheckboxStates
}
