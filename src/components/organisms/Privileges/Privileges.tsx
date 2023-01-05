import React from "react";
import { Step, SelectedCompany, Accordion, Button, InfoSection, Divider } from "components/atoms";
import { CheckboxList } from "../../molecules/CheckboxList/CheckboxList";
import { getStateForId, getAccordionSubtitle } from "./utils";
import { PrivilegesProps } from "./Privileges.types";
import * as S from "./Privileges.styles";
import { useTranslations } from "components/context/Translations/TranslationsCtx";

export const Privileges = ({
	categories,
	choosePrivilege,
	privilegeCheckboxesState,
	resetPrivileges,
	privileges,
	setStepNumber,
	selectedCompanyId,
	selectedCompanyName }: PrivilegesProps) => {
	const { removeAccess, saveAndClose, selectedCompany, editPrivileges, servicesSelected, of } = useTranslations();

	return (
		<Step>
			<S.SectionTitle>{editPrivileges}</S.SectionTitle>
			<InfoSection title={selectedCompany}>
				<SelectedCompany companyName={selectedCompanyName} id={selectedCompanyId} />
			</InfoSection>
			<Divider />
			{categories.map(({ category, privilegeIds }, i) => {
				const privilegesInCategory = privilegeIds.map(id => privileges.find(privilege => privilege.id === id)!);
				const accordionSubtitle = getAccordionSubtitle({ of, privilegeCheckboxesState, privilegeIds, privileges, servicesSelected });

				return (
					<Accordion key={category} title={category} subtitle={accordionSubtitle} index={i}>
						<CheckboxList
							choosePrivilege={choosePrivilege}
							getStateForId={getStateForId(privilegeCheckboxesState)}
							privilegesInCategory={privilegesInCategory}
							chosenPrivileges={privilegeCheckboxesState}
						/>
					</Accordion>
				);
			})}
			<S.ButtonWrapper>
				<Button variant='primary' onClick={setStepNumber}>{saveAndClose}</Button>
				<Button variant='dangerous' onClick={resetPrivileges}>{removeAccess}</Button>
			</S.ButtonWrapper>
		</Step>
	);
};