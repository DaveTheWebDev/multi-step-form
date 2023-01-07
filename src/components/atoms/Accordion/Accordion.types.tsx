export interface AccordionProps {
  title: string;
  subtitle: string;
  children: JSX.Element;
  index: number;
}

export interface ArrowIconProps extends React.HTMLProps<HTMLOrSVGElement> {
  isExpanded: boolean
}