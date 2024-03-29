import React, { memo } from "react";
import * as S from "components/atoms/Accordion/Accordion.styles";
import { ArrowIconProps } from "components/atoms/Accordion/Accordion.types";

export const ArrowIcon = memo(({ isExpanded, onClick }: ArrowIconProps) => {
	return <S.Arrow isExpanded={isExpanded} onClick={onClick} aria-hidden={true} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M0.96967 9.53033C1.26256 9.82322 1.73744 9.82322 2.03033 9.53033L9 2.56066L15.9697 9.53033C16.2626 9.82322 16.7374 9.82322 17.0303 9.53033C17.3232 9.23744 17.3232 8.76256 17.0303 8.46967L9.53033 0.96967C9.23744 0.676777 8.76256 0.676777 8.46967 0.96967L0.96967 8.46967C0.676777 8.76256 0.676777 9.23744 0.96967 9.53033Z" fill="#134359" />
	</S.Arrow>;
});
ArrowIcon.displayName = "ArrowIcon";


