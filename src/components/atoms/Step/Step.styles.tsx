import styled from 'styled-components'

//Przy większej aplikacji możemy wyciągnąć kolory i inne powtarzalne w komponentach właściwości do theme
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: flex;
  flex-direction: column;

  width: 750px;
  min-height: 500px;
  padding: 40px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.white};
`

export { Wrapper }