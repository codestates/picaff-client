import styled from 'styled-components'

const MenuBtn = styled.button`
  width: 200px;
  height: 45px;
  font-size: 1.4rem;
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
