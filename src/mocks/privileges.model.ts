interface IPrivilege {
	label: string;
	name: string;
	subprivileges?: IPrivilege[];
}

export interface IPrivileges {
	category: string;
	privileges: IPrivilege[];
}
