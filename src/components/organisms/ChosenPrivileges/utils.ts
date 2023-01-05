import { IPrivilegeCheckboxStates, CheckboxState, IPrivilege } from "mocks/privileges/privileges.model";

export const checkIfListEmpty = (privilegeCheckboxesState: IPrivilegeCheckboxStates) => {
	const chosenPrivileges = privilegeCheckboxesState.filter(
		(privilegeState) => privilegeState.state === CheckboxState.CHECKED
	);

	return chosenPrivileges.length === 0;
};
export const getChosenPrivilegesInCategory = (
	privilegeCheckboxesState: IPrivilegeCheckboxStates,
	privileges: IPrivilege[],
	privilegesIdsInCategory: number[]
) => {
	const chosenPrivileges = privilegeCheckboxesState
		.filter(
			(privilegeState) =>
				privilegeState.state === CheckboxState.CHECKED && privilegesIdsInCategory.includes(privilegeState.id)
		)
		.map((privilegeState) => privileges.find((privilege) => privilege.id === privilegeState.id)!);

	// const x = privilegeIds.filter(id => chosenPrivileges.some(privilege => privilege.id === id)).map(id => chosenPrivileges.find(privilege => privilege.id === id)!)
	return chosenPrivileges;
};
