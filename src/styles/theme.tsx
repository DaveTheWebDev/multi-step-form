import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global";

const theme: DefaultTheme = {
	colors: {
		primary: "#0878A1",
		error: "#FF0D0D",
		white: "#FFF",
		black: "#0E171B"
	},
	fonts: {
		family: {
			main: "Roboto"
		},
	},
};

export const StylesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <ThemeProvider theme={theme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>;
};

