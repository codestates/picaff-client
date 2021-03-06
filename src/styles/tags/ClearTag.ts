import styled from 'styled-components'

const ClearTag = styled.button`
  width: 110px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: transparent;
  color: ${({ theme }) => theme.color.PointC};
  border: transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.YelloC};
  }
`

export default ClearTag
