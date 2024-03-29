import React, { memo } from "react";

import * as S from "./Checkmark.styles";

export const Checkmark = memo(({ depthLevel }: { depthLevel: number }) => {
	return (
		<S.Checkmark depthLevel={depthLevel} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden='true' focusable='false'>
			<path fillRule="evenodd" clipRule="evenodd" d="M11.6712 0.934694C11.9259 1.20052 11.917 1.62254 11.6511 1.87729L4.36806 8.85691C3.9753 9.2333 3.35371 9.22669 2.96905 8.84203L0.33786 6.21084C0.07751 5.95049 0.0775101 5.52838 0.33786 5.26803C0.598209 5.00768 1.02032 5.00768 1.28067 5.26803L3.68112 7.66848L10.7286 0.91464C10.9944 0.659887 11.4164 0.668866 11.6712 0.934694Z" fill="white" />
		</S.Checkmark>);
});
Checkmark.displayName = "Checkmark";
