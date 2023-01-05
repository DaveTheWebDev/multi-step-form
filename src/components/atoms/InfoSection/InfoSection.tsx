import React from "react";
import { InfoSectionProps } from "./InfoSection.types";
import * as S from "./InfoSection.styles";

export const InfoSection = ({ children, title, style }: InfoSectionProps) => {
	return (
		<S.Wrapper style={style} >
			<S.Title>{title}</S.Title>
			{children}
		</S.Wrapper>
	);
};