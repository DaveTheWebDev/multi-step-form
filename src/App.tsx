import React from "react";
import { MultiStepsFormProvider, TranslationsProvider } from "components/context";
import { StylesProvider } from "styles/theme";
import { Form } from "components/templates/Form/Form";

export const App = () => {
	return (
		<StylesProvider>
			<MultiStepsFormProvider>
				<TranslationsProvider>
					<Form />
				</TranslationsProvider>
			</MultiStepsFormProvider>
		</StylesProvider>
	);
};
