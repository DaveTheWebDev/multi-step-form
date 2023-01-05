import { ICategory, IPrivilege } from "./privileges.model";

export const categories: ICategory[] = [
	{
		id: 1232,
		category: "Employees",
		privilegeIds: [1, 11, 12, 13, 131, 132],
	},
	{
		id: 3123,
		category: "Company Management",
		privilegeIds: [2, 21, 22, 212, 211],
	},
	{
		id: 3543,
		category: "Company Performance",
		privilegeIds: [3, 31, 32, 33],
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
		id: 11,
		parentId: 1,
		label: "Add admin employee",
		name: "add-admin-employee",
	},
	{
		id: 12,
		parentId: 1,
		label: "Add HR employee",
		name: "add-hr-employee",
	},
	{
		id: 13,
		parentId: 1,
		label: "Add developer employee",
		name: "add-developer-employee",
	},
	{
		id: 131,
		parentId: 13,
		label: "Add backend developer",
		name: "add-backend-developer",
	},
	{
		id: 132,
		parentId: 13,
		label: "Add frontend developer",
		name: "add-frontend-developer",
	},
	{
		id: 2,
		label: "Add company benefits",
		name: "add-company-benefits",
	},
	{
		id: 21,
		parentId: 2,
		label: "Fruit days",
		name: "fruit-days",
	},
	{
		id: 211,
		parentId: 21,
		label: "Fruit Thursdays",
		name: "fruit-thursdays",
	},
	{
		id: 212,
		parentId: 21,
		label: "Fruit Fridays",
		name: "fruit-fridays",
	},
	{
		id: 22,
		parentId: 2,
		label: "Multisport Card",
		name: "multisport-card",
	},

	{
		id: 3,
		label: "Speed up your employees",
		name: "speed-up-employees",
	},
	{
		parentId: 3,
		id: 31,
		label: "Speed up by x1",
		name: "speed-up-by-x1",
	},
	{
		parentId: 3,
		id: 32,
		label: "Speed up by x2",
		name: "speed-up-by-x2",
	},
	{
		parentId: 3,
		id: 33,
		label: "Speed up by x3 (CAREFULLY!)",
		name: "speed-up-by-x3",
	},
	{
		id: 6,
		label: "Send for remote work",
		name: "send-for-remote-work",
	},
];
