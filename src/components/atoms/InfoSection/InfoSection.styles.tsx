import styled from 'styled-components'


//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Wrapper = styled.section`

`
const Title = styled.h2`
color: ${({ theme }) => theme.colors.black};

font-weight: 600;
font-size: 20px;
line-height: 1.4;
`

export { Wrapper, Title }