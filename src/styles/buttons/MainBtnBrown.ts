import styled from 'styled-components'

const MainBtnBrown = styled.button`
  width: 300px;
  height: 75px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.color.BrownC};
  color: ${({ theme }) => theme.color.BackC};
  border: transparent;
  border-radius: 20px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.StrongBrownC};
  }
`

export default MainBtnBrown
