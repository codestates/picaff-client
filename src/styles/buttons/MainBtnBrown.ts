import styled from 'styled-components'

const MainBtnBrown = styled.button`
  width: 100%;
  height: 100%;
  font-size: inherit;
  background-color: ${({ theme }) => theme.color.BrownC};
  color: ${({ theme }) => theme.color.BackC};
  border: transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.StrongBrownC};
  }
`

export default MainBtnBrown
