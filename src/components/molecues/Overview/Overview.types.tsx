import React from "react";
import { InfoSectionProps } from "../../atoms/InfoSection/InfoSection.types";

export interface OverviewProps {
  sections: InfoSectionProps[]
  buttonLabel: string;
  buttonHandler: () => void
}
