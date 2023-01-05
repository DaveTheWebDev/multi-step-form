import React from "react";
import { MultiStepsFormProvider, TranslationsProvider } from "components/context";
import { StylesProvider } from "styles/theme";
import Form from "components/organisms/Form";

function App() {
	return (
		<StylesProvider>
			<MultiStepsFormProvider>
				<TranslationsProvider>
					<Form />
				</TranslationsProvider>
			</MultiStepsFormProvider>
		</StylesProvider>
	);
}

export default App;
