import styled from 'styled-components'

type ShareComponentProps = {
  isShareOpen: boolean
}

export const ShareComponent = styled.div<ShareComponentProps>`
  display: ${({ isShareOpen }) => (isShareOpen ? 'flex' : 'none')};
  position: fixed;
  top: 110px;
  right: 0;

  width: 300px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.PointC};
  border-radius: 10px 0 0 10px;

  img {
    height: 50px;
    margin: 5px 10px 5px 5px;
    border-radius: 10px;
  }
`

export default ShareComponent
