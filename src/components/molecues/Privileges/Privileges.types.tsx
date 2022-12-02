import React from "react";
import { IChoosenPrivilege, IPrivileges } from "../../../mocks/privileges.model";

export interface PrivilegesProps {
  priviliges: IPrivileges[]
  saveButtonLabel: string;
  clearButtonLabel: string;
  sectionLabel: string;
  selectedCategoryLabel: string;
  selectedCategoryDiveder: string;
  choosePrivilege: (dephLevel: number, label: string, category: string, choosenPrivileges: IChoosenPrivilege[]) => () => void;
  resetPrivileges: () => void
  choosenPrivileges: IChoosenPrivilege[]
  setStepNumber: () => void
}
