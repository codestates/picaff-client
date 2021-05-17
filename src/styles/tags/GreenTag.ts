import styled from 'styled-components'

const GreenTag = styled.button`
  width: 110px;
  height: 40px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.PointC};
  color: ${({ theme }) => theme.color.WhiteC};
  border: transparent;
  border-radius: 10px;
  outline: none;
`

export default GreenTag
