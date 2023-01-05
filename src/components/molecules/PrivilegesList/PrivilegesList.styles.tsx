import styled from "styled-components";

const List = styled.ul`
  padding-left : 16px;
`;
const ListItem = styled.li`
  &::marker {
    color: ${({ theme }) => theme.colors.primary}
  }
`;


export { List, ListItem };