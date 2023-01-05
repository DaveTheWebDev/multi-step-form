import React from "react";
import { CheckboxProps } from "./Checkbox.types";
import { Checkmark } from "../Icons/Checkmark/Checkmark";
import * as S from "./Checkbox.styles";

export const Checkbox = ({ isChecked, name, id, label, depthLevel, choosePrivilege }: CheckboxProps) => {
	const choosePrivilegeOnKeyDown: React.KeyboardEventHandler<HTMLSpanElement> = (e) => {
		if (e.key === " " ||
      e.code === "Space"
		) {
			e.preventDefault();
			choosePrivilege();
		}
	};

	return (
		<S.Wrapper depthLevel={depthLevel} onClick={choosePrivilege}>
			<S.Input type='checkbox' checked={isChecked} name={name} id={id} tabIndex={-1} />
			<S.Label depthLevel={depthLevel} id={label} htmlFor={id} isChecked={isChecked}>{label}</S.Label>
			<S.InputImitation
				depthLevel={depthLevel}
				isChecked={isChecked}
				role="checkbox"
				aria-checked={isChecked}
				aria-labelledby={label}
				tabIndex={0}
				onKeyDown={choosePrivilegeOnKeyDown} />
			{isChecked && <Checkmark depthLevel={depthLevel} />}
		</S.Wrapper>
	);
};