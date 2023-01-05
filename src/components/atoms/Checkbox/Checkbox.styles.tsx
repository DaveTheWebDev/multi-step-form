import styled from "styled-components";
import { CheckboxLabelProps } from "./Checkbox.types";
const paddingLeft = 30;

const Wrapper = styled.li<{ depthLevel: number }>`
  position: relative;
  margin: 16px 0;
  cursor: pointer;
`;
const Label = styled.label<CheckboxLabelProps>`
  padding-left: ${({ depthLevel }) => 2 * depthLevel + paddingLeft}px;
`;
const InputImitation = styled.span<CheckboxLabelProps>`
  position: absolute;
  top: 0;
  left: 0;

  height: 24px;
  width: 24px;
  border: 2px solid #134359;
  border-radius: 4px;

  background-color: ${({ theme, isChecked }) => isChecked ? "#134359" : theme.colors.white};
  
`;
const Input = styled.input`
position: absolute;
top: 0;
left: 0;
z-index: 0;

width: 100%;
height: 100%;
margin: 0;
border: none;

opacity: 0;
  
background-color: transparent;

cursor: pointer;
`;

export { Input, Label, Wrapper, InputImitation };