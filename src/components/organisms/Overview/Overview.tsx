import React from "react";
import { Step, InfoSection, Button, SelectedCompany, Divider } from "components/atoms";
import { ChosenPrivileges } from "components/organisms";
import { OverviewProps } from "./Overview.types";
import { useTranslations } from "components/context/Translations/TranslationsCtx";

export const Overview = ({
	privilegeCheckboxesState,
	privileges,
	categories,
	setStepNumber,
	selectedCompanyId,
	selectedCompanyName }: OverviewProps) => {
	const { selectedCompany, chosenPrivileges, emptyPrivileges, addPreferences } = useTranslations();
	return (
		<Step>
			<InfoSection title={selectedCompany}>
				<SelectedCompany companyName={selectedCompanyName} id={selectedCompanyId} />
			</InfoSection>
			<Divider />
			<InfoSection title={chosenPrivileges} style={{ marginBottom: "16px" }} >
				<ChosenPrivileges privileges={privileges} categories={categories} privilegeCheckboxesState={privilegeCheckboxesState} emptyPrivilegesLabel={emptyPrivileges} />
			</InfoSection>
			<Button style={{ marginTop: "auto" }} variant='primary' onClick={setStepNumber}>{addPreferences}</Button>
		</Step>
	);
};