import styled from 'styled-components'

const MainBtnIvory = styled.button`
  width: 300px;
  height: 75px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.color.BackC};
  color: ${({ theme }) => theme.color.BrownC};
  border: transparent;
  border-radius: 20px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.PointC};
    color: ${({ theme }) => theme.color.BackC};
  }
`

export default MainBtnIvory
