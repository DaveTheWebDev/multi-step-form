import styled from 'styled-components'

const List = styled.ul<{ depthLevel: number }>`
  padding-left : ${({ depthLevel }) => depthLevel * 16}px;
  list-style: none;
`

export { List }