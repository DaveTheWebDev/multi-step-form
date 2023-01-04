import styled from 'styled-components'

const List = styled.ul<{ depthLevel: number }>`
  padding-left : ${({ depthLevel }) => depthLevel * 16 + 16}px;
`
const ListItem = styled.li`
  &::marker {
    color: ${({ theme }) => theme.colors.primary}
  }
`




export { List, ListItem }