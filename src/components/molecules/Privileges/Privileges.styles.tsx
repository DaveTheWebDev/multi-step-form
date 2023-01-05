import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
const SectionTitle = styled.h2`
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.black};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;
const Divider = styled.br`
content: '';
width: 100%;
height: 1px;
margin: 16px 0;
background-color: #D9D9D9;
`;

export { ButtonWrapper, SectionTitle, Divider };