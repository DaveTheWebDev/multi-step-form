import { useState, useCallback, useLayoutEffect } from "react";

export const useAccordion = (index: number) => {
	const [isExpanded, setExpanded] = useState(false);

	const toggleExpanded = useCallback(() => {
		setExpanded(prev => !prev);
	}, []);

	useLayoutEffect(() => {
		if (index === 0) {
			setExpanded(true);
		}
	}, []);

	return { isExpanded, toggleExpanded };
};