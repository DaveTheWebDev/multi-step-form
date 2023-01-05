import React from "react";
import { PrivilegesListProps } from "./PrivilegesList.types";
import * as S from "./PrivilegesList.styles";

export const PrivilegesList = ({
	privilegeCheckboxesState,
	privileges,
	idsToRender = [],
}: PrivilegesListProps) => {

	if (!idsToRender.length) {
		idsToRender = privileges.filter((privilege) => !privilege.parentId).map((privilegeWithoutParent) => privilegeWithoutParent.id);
	}

	const getChildPrivilegesList = (parentId: number) => {
		const childrenPrivileges = privileges.filter((privilege) => privilege.parentId === parentId);
		if (!childrenPrivileges.length) return null;
		return (
			<PrivilegesList
				privileges={privileges}
				idsToRender={childrenPrivileges.map((childrenPrivilege) => childrenPrivilege.id)}
				privilegeCheckboxesState={privilegeCheckboxesState}
			/>
		);
	};

	return (
		<S.List>
			{idsToRender.map((id) => {
				const privilege = privileges.find((privilege) => privilege.id === id)!;
				return (
					<React.Fragment key={privilege.id}>
						<S.ListItem>
							{privilege.label}
						</S.ListItem>
						{getChildPrivilegesList(privilege.id)}
					</React.Fragment>
				);
			})}
		</S.List>
	);
};
