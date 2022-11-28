import { IPrivileges } from "./privileges.model";

export const privileges: IPrivileges[] = [
	{
		category: "Employees",
		privileges: [
			{
				label: "a",
				name: "a",
				children: [
					{
						label: "b",
						name: "b",
					},
				],
			},
		],
	},
	{
		category: "Company Management",
		privileges: [
			{
				label: "c",
				name: "c",
				children: [
					{
						label: "d",
						name: "d",
					},
					{
						label: "e",
						name: "e",
					},
				],
			},
		],
	},
	{
		category: "Company Performance",
		privileges: [
			{
				label: "f",
				name: "f",
			},
			{
				label: "g",
				name: "g",
			},
			{
				label: "h",
				name: "h",
			},
		],
	},
	{
		category: "Workspaces Management",
		privileges: [
			{
				label: "i",
				name: "i",
			},
		],
	},
];
