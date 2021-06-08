import styled from 'styled-components'

const GreenTag = styled.button`
  width: 110px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.PointC};
  color: ${({ theme }) => theme.color.WhiteC};
  border: transparent;
  border-radius: 10px;
  outline: none;
`

export default GreenTag
