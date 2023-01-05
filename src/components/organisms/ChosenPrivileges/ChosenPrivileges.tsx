import React from "react";
import { ChosenPrivilegesProps } from "./ChosenPrivileges.types";
import { PrivilegesList } from "components/molecules/PrivilegesList/PrivilegesList";
import { checkIfListEmpty, getChosenPrivilegesInCategory } from "./utils";
import * as S from "./ChosenPrivileges.styles";

export const ChosenPrivileges = ({ privilegeCheckboxesState, emptyPrivilegesLabel, privileges, categories }: ChosenPrivilegesProps) => {
	const isListEmpty = checkIfListEmpty(privilegeCheckboxesState);

	return (
		isListEmpty ?
			<S.EmptyPrivileges>{emptyPrivilegesLabel}</S.EmptyPrivileges> :
			<>
				{categories.map(({ category, privilegeIds, id }) => {
					const chosenPrivilegesInCategory = getChosenPrivilegesInCategory(privilegeCheckboxesState, privileges, privilegeIds);
					const isCategoryEmpty = chosenPrivilegesInCategory.length === 0;

					return (
						!isCategoryEmpty && <React.Fragment key={id}>
							<S.CategoryName>{category}</S.CategoryName>
							<PrivilegesList
								privilegeCheckboxesState={privilegeCheckboxesState}
								privileges={chosenPrivilegesInCategory}
							/>
						</React.Fragment>
					);
				})}
			</>
	);
};