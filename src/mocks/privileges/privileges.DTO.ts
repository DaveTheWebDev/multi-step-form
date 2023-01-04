export interface IPrivilegeDTO {
	id: number;
	label: string;
	name: string;
	parentId?: number;
}

export interface ICategoryDTO {
	category: string;
	privilegeIds: number[];
}
