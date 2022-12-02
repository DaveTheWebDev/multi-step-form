export interface AccordionProps {
  title: string;
  subtitle: string;
  children: React.ReactElement[]
  index: number;
}

export interface ArrowIconProps extends React.HTMLProps<HTMLOrSVGElement> {
  isExpanded: boolean
}