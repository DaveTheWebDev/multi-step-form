import { IPrivilegeDTO, ICategoryDTO } from "./privileges.DTO";

//extends DTOs to further app model change
export interface IPrivilege extends IPrivilegeDTO {}

export interface ICategory extends ICategoryDTO {}

export enum CheckboxState {
	CHECKED = "CHECKED",
	UNCHECKED = "UNCHECKED",
}

export type IPrivilegeCheckboxStates = {
	id: number;
	state: CheckboxState;
}[];
