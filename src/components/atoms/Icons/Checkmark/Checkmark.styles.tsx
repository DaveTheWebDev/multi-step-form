import styled from "styled-components";
const left = 3;

const Checkmark = styled.svg<{ depthLevel: number }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 6px;
`;


export { Checkmark };