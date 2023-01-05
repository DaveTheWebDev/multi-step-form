import React from "react";
import { Checkbox } from "components/atoms";
import { CheckboxListProps } from "./CheckboxList.types";
import * as S from "./CheckboxList.styles";
import { CheckboxState } from "mocks/privileges/privileges.model";

export const CheckboxList = ({
	choosePrivilege,
	chosenPrivileges,
	getStateForId,
	privilegesInCategory,
	idsToRender = [],
	depthLevel = 0,
}: CheckboxListProps) => {

	if (!idsToRender.length) {
		idsToRender = privilegesInCategory.filter((i) => !i.parentId).map((i) => i.id);
	}

	const getChildNodes = (parentId: number) => {
		const nodeItems = privilegesInCategory.filter((i) => i.parentId === parentId);
		if (!nodeItems.length) return null;
		return (
			<CheckboxList
				privilegesInCategory={privilegesInCategory}
				idsToRender={nodeItems.map((i) => i.id)}
				depthLevel={depthLevel + 1}
				choosePrivilege={choosePrivilege}
				getStateForId={getStateForId}
				chosenPrivileges={chosenPrivileges}
			/>
		);
	};

	return (
		<S.List depthLevel={depthLevel}>
			{idsToRender.map((id) => {
				const item = privilegesInCategory.find((i) => i.id === id)!;
				const checkboxState = getStateForId(id);
				const { label, name } = item;
				return (
					<React.Fragment key={item.id}>
						<Checkbox
							choosePrivilege={choosePrivilege(chosenPrivileges, privilegesInCategory, item.id)}
							isChecked={checkboxState === CheckboxState.CHECKED}
							label={label}
							name={name}
							id={label}
							depthLevel={depthLevel}
						/>
						{getChildNodes(item.id)}
					</React.Fragment>
				);
			})}
		</S.List>

	// <div key={label + name}>
	//   <Checkbox key={label}
	//     choosePrivilege={choosePrivilege(id, chosenPrivileges)}
	//     isChecked={chosenPrivileges.includes(id)}
	//     label={label}
	//     name={name}
	//     id={label}
	//     depthLevel={i}
	//     isVisible={true}
	//   />
	//   {subprivileges?.map(({ label, name, id }) =>
	//     <Checkbox
	//       key={label}
	//       choosePrivilege={choosePrivilege(id, chosenPrivileges)}
	//       isChecked={chosenPrivileges.includes(id)}
	//       label={label}
	//       name={name}
	//       id={label}
	//       depthLevel={i}
	//       isVisible={false}
	//     />
	//   )}
	// </div>
	);
};
