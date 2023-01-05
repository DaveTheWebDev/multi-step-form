import React from "react";
import { StepProps } from "./Step.types";
import * as S from "./Step.styles";

export const Step = ({ children }: StepProps) => {
	return <S.Wrapper>
		{children}
	</S.Wrapper>;
};