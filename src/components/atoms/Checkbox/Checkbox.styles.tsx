import styled from 'styled-components'
import { CheckboxLabelProps } from './Checkbox.types'
const paddingLeft = 36
const left = 36
//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Wrapper = styled.div<{ dephLevel: number }>`
  position: relative;
  margin: 16px 0;
  cursor: pointer;
`
const Label = styled.label<CheckboxLabelProps>`
  padding-left: ${({ dephLevel }) => paddingLeft * dephLevel + paddingLeft}px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: ${({ dephLevel }) => left * dephLevel}px;

    height: 24px;
    width: 24px;
    border: 2px solid #134359;
    border-radius: 4px;

    background-color: ${({ theme, isChecked }) => isChecked ? '#134359' : theme.colors.white};

  }
`
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
`

export { Input, Label, Wrapper }