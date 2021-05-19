import styled from 'styled-components'

const MainBtnIvory = styled.button`
  width: 100%;
  height: 100%;
  font-size: inherit;
  background-color: ${({ theme }) => theme.color.BackC};
  color: ${({ theme }) => theme.color.BrownC};
  border: transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.PointC};
    color: ${({ theme }) => theme.color.BackC};
  }
`

export default MainBtnIvory
