import { IPrivilegeCheckboxStates, IPrivilege, CheckboxState } from "mocks/privileges/privileges.model";

interface IGetAccordionSubheading {
	privilegeIds: number[];
	privilegeCheckboxesState: IPrivilegeCheckboxStates;
	privileges: IPrivilege[];
	of: string;
	servicesSelected: string;
}

export const getAccordionSubtitle = ({
	privilegeIds,
	privilegeCheckboxesState,
	privileges,
	of,
	servicesSelected,
}: IGetAccordionSubheading) => {
	const chosenPrivilegesInCategory = privilegeIds.filter((id) =>
		privilegeCheckboxesState.find(
			(chosenPrivilege) => chosenPrivilege.id === id && chosenPrivilege.state === CheckboxState.CHECKED
		)
	);
	const accordionSubtitle = `${chosenPrivilegesInCategory.length} ${of} ${privilegeIds.length} ${servicesSelected}`;
	return accordionSubtitle;
};

export const getStateForId = (chosenPrivileges: IPrivilegeCheckboxStates) => (id: number) => {
	return chosenPrivileges.find((privilege) => privilege.id === id)!.state;
};
