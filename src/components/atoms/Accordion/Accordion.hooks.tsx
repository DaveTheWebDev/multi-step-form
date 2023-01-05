import { useState, useCallback, useEffect } from "react";

export const useAccordion = (index: number) => {
	const [isExpanded, setExpanded] = useState(false);

	const toggleExpanded = useCallback(() => {
		setExpanded(prev => !prev);
	}, []);

	useEffect(() => {
		if (index === 0) {
			setExpanded(true);
		}
	}, []);

	return { isExpanded, toggleExpanded };
};