import "styled-components";

//laczymy interfejsy
declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: "#0878A1";
			error: "#FF0D0D";
			white: "#FFF";
		};
		fonts: {
			family: {
				main: string;
				secondary?: string;
				third?: string;
			};
		};
	}
}
