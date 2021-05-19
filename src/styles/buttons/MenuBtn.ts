import styled from 'styled-components'

const MenuBtn = styled.button`
  width: 100%;
  height: 100%;
  font-size: inherit;
  background-color: transparent;
  color: ${({ theme }) => theme.color.PointC};
  border: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #696b6a;
  }
`

export default MenuBtn
