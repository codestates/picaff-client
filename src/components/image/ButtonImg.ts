import styled from 'styled-components'

// type ButtonImageType = {
//   isItemClicked: boolean
// }

export const ButtonImage = styled.img`
  width: 230px;
  margin: 0 5px;
  padding: 2px;
  border: 2px solid ${({ theme }) => theme.color.GrayC};
  border-radius: 5px;
  cursor: pointer;
`

export default ButtonImage
