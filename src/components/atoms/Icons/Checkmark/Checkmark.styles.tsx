import styled from "styled-components";

const Checkmark = styled.svg<{ depthLevel: number }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 6px;
`;


export { Checkmark };