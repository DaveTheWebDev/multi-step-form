import { ICategory, IPrivilege } from "./privileges.model";

export const categories: ICategory[] = [
	{
		id: 1232,
		category: "Employees",
		privilegeIds: [1, 12],
	},
	{
		id: 3123,
		category: "Company Management",
		privilegeIds: [2, 21, 22],
	},
	{
		id: 3543,
		category: "Company Performance",
		privilegeIds: [3, 4, 5],
	},
	{
		id: 2137,
		category: "Workspaces Management",
		privilegeIds: [6],
	},
];

export const privileges: IPrivilege[] = [
	{
		id: 1,
		label: "Add employee",
		name: "add-employee",
	},
	{
		id: 12,
		parentId: 1,
		label: "Add admin employee",
		name: "add-admin-employee",
	},
	{
		id: 2,
		label: "Add company benefits",
		name: "add-company-benefits",
	},
	{
		id: 21,
		parentId: 2,
		label: "Fruit Thursdays",
		name: "fruit-thursdays",
	},
	{
		id: 22,
		parentId: 2,
		label: "Multisport Card",
		name: "multisport-card",
	},

	{
		id: 3,
		label: "Speed up employees x1",
		name: "speed-up-employees-x1",
	},
	{
		id: 4,
		label: "Speed up employees x2",
		name: "speed-up-employees-x2",
	},
	{
		id: 5,
		label: "Speed up employees x3 (CAREFULLY!)",
		name: "speed-up-employees-x3",
	},
	{
		id: 6,
		label: "Send for remote work",
		name: "send-for-remote-work",
	},
];
