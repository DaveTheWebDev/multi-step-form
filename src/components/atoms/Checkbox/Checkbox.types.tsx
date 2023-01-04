//użyłem interfejsów ze względu na performance
export interface CheckboxProps extends CheckboxLabelProps, React.HTMLProps<HTMLInputElement> {
  choosePrivilege: () => void
}
export interface CheckboxLabelProps {
  isChecked: boolean;
  depthLevel: number;

}