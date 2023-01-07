import React, { memo } from "react";
import { SelectedCompanyProps } from "./SelectedCompany.types";
import * as S from "./SelectedCompany.styles";

export const SelectedCompany = memo(({ companyName, id }: SelectedCompanyProps) => {
	return (
		<S.Wrapper>
			<S.Status />
			<S.Id>{id}</S.Id>
			<S.CompanyName>{companyName}</S.CompanyName>
		</S.Wrapper>);
});
SelectedCompany.displayName = "SelectedCompany";
