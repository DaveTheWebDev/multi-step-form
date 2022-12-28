import styled from 'styled-components'
const left = 36
//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Checkmark = styled.svg<{ depthLevel: number }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ depthLevel }) => left * depthLevel + 6}px;
`


export { Checkmark }