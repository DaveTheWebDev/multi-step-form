export interface IPrivilegeDTO {
	id: number;
	label: string;
	name: string;
	parentId?: number;
}

export interface ICategoryDTO {
	id: number;
	category: string;
	privilegeIds: number[];
}
