interface IPrivilege {
	label: string;
	name: string;
	children?: IPrivilege[];
}

export interface IPrivileges {
	category: string;
	privileges: IPrivilege[];
}
