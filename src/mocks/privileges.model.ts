export interface IPrivilege {
	label: string;
	name: string;
	subprivileges?: IPrivilege[];
}

export interface IChosenPrivilege {
	depthLevel: number;
	label: string;
	category: string;
}

export interface IPrivileges {
	category: string;
	privileges: IPrivilege[];
}
