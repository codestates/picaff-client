import styled from 'styled-components'

const ClearTag = styled.button`
  width: 110px;
  height: 40px;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: transparent;
  color: ${({ theme }) => theme.color.PointC};
  border: transparent;
  border-radius: 10px;
  outline: none;
`

export default ClearTag
