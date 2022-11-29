import React from "react";
import { IPrivileges } from "../../../mocks/privileges.model";

export interface PrivilegesProps {
  priviliges: IPrivileges[]
  saveButtonLabel: string;
  clearButtonLabel: string;
}
