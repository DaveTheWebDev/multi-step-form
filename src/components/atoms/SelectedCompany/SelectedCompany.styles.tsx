import styled from "styled-components";

const Wrapper = styled.p`
display: flex;
align-items: center;
`;

const Status = styled.span`
display: block;

width: 11px;
height: 11px;
border-radius: 50%;
margin-right: 4px;

border: 3px solid #2BB574;
`;
const Id = styled.span`
  margin-right: 8px;

  color: #0E171B;

  font-weight: 700;
  font-size: 12px;
`;
const CompanyName = styled.span`
  color: #0E171B;

  font-weight: 400;
  font-size: 16px;
`;

export { Status, Id, CompanyName, Wrapper };