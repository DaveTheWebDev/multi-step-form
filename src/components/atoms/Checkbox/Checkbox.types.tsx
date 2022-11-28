//użyłem interfejsów ze względu na performance
export interface CheckboxProps extends CheckboxInputProps, CheckboxLabelProps {
}

export interface CheckboxInputProps {
  name: string;
  isChecked: boolean;
  isDisabled: boolean
  id: string;
}

export interface CheckboxLabelProps {
  label: string;
}