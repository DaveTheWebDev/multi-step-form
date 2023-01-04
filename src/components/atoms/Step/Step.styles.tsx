import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;

  width: 750px;
  min-height: 500px;
  padding: 40px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.white};
`

export { Wrapper }