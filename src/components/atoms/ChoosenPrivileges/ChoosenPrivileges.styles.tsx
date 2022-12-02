import styled from 'styled-components'

const Wrapper = styled.ul`
margin-bottom: 16px;
`

const Privilege = styled.li<{ dephLevel: number }>`
  
`
const EmptyPrivileges = styled.p`
  margin-bottom: 16px;
  line-height: 150%;
  color: #0E171B;
`


export { Wrapper, Privilege, EmptyPrivileges }