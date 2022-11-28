import styled from 'styled-components'

interface WrapperProps {
  isExpanded: boolean
}

//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Wrapper = styled.fieldset<WrapperProps>`
position: relative;
border: none;
background-color: ${({ theme }) => theme.colors.white};
& svg {
  position: absolute;
  top: 8px;
  right: 0;
  width: 16.5px;
  transform: rotate(${({ isExpanded }) => isExpanded ? '180deg' : '0deg'});
  cursor: pointer;
  }
`
const Title = styled.h3`
font-family: ${({ theme }) => theme.fonts.family.main};
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 1.4;
cursor: pointer;

& span {
  font-family: ${({ theme }) => theme.fonts.family.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}
`

export { Wrapper, Title }