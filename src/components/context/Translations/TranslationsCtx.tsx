import React, { createContext, useContext, useMemo } from "react";
import { defaultState } from "./TranslationsCtx.state";
import { ITranslations } from "mocks/translations/translations.model";

const TranslationsCtx = createContext<ITranslations | undefined>(undefined);

export const useTranslations = () => {
	const translationsContext = useContext(TranslationsCtx);

	if (!translationsContext) {
		throw new Error("Component beyond TranslationsCtx!");
	}

	return translationsContext;
};


export const TranslationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const memoizedTranslations = useMemo(() => defaultState, []);

	return <TranslationsCtx.Provider value={memoizedTranslations}>
		{children}
	</TranslationsCtx.Provider>;
};