//użyłem interfejsów ze względu na performance
export interface CheckboxProps extends CheckboxInputProps, CheckboxLabelProps, React.HTMLProps<HTMLInputElement> {
  choosePrivilege: () => void

}

export interface CheckboxInputProps {

}
export interface CheckboxLabelProps {
  isChecked: boolean;
  depthLevel: number;

}