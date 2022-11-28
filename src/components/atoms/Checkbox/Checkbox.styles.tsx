import styled from 'styled-components'
import { CheckboxInputProps } from './Checkbox.types'

//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Wrapper = styled.div`
  position: relative;

  cursor: pointer;
`
const Label = styled.label`
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    height: 40px;
    width: 40px;
    border: 2px solid #134359;
    border-radius: 12px;

  }
`
const Input = styled.input<CheckboxInputProps>`
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