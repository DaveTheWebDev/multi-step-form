import { privileges } from "mocks/privileges/privileges.mock";
import { CheckboxState, IPrivilegeCheckboxStates } from "mocks/privileges/privileges.model";

export const defaultState: IPrivilegeCheckboxStates = privileges.map(({ id }) => {
	return { id, state: CheckboxState.UNCHECKED };
});
