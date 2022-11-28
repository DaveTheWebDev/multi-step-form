import styled from 'styled-components'

//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Wrapper = styled.fieldset`
position: relative;

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