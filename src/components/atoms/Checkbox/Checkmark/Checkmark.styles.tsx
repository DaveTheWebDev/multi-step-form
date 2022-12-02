import styled from 'styled-components'
const left = 36
//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Checkmark = styled.svg<{ dephLevel: number }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ dephLevel }) => left * dephLevel + 6}px;
`


export { Checkmark }