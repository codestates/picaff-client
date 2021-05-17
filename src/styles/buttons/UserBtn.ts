import styled from 'styled-components'

const UserBtn = styled.button`
  width: 150px;
  height: 45px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.color.PointC};
  color: ${({ theme }) => theme.color.WhiteC};
  border: transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.color.PointC};
    border: 3px solid ${({ theme }) => theme.color.PointC};
  }
`

export default UserBtn
