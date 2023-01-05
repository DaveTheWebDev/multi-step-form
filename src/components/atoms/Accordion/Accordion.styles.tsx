import styled from "styled-components";

interface WrapperProps {
  isExpanded: boolean
}

const Wrapper = styled.fieldset`
position: relative;
border: none;
background-color: ${({ theme }) => theme.colors.white};
overflow: hidden;
`;

const Arrow = styled.svg<WrapperProps>`
  position: absolute;
  top: 0px;
  right: 0;
  transform: rotate(${({ isExpanded }) => isExpanded ? "180deg" : "0deg"});
  cursor: pointer;
`;
const Title = styled.button`

border: none;
background-color: ${({ theme }) => theme.colors.white};

font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 1.4;
cursor: pointer;

& span {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
`;
const Panel = styled.div<WrapperProps>`
  max-height: ${({ isExpanded }) => isExpanded ? "500px" : "0px"};
  transition: ${({ isExpanded }) => isExpanded ? ".3s" : "0s"};
  will-change: max-height;

  & span[role=checkbox] {
    display: ${({ isExpanded }) => isExpanded ? "block" : "none"};
  }
`;
export { Wrapper, Title, Panel, Arrow };