import { IPrivilegeDTO, ICategoryDTO } from "./privileges.DTO";

//extends DTOs to further app model change
export type IPrivilege = IPrivilegeDTO

export type ICategory = ICategoryDTO

export enum CheckboxState {
	CHECKED = "CHECKED",
	UNCHECKED = "UNCHECKED",
}

export type IPrivilegeCheckboxStates = {
	id: number;
	state: CheckboxState;
}[];
