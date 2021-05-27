import styled from 'styled-components'

export const ShareComponent = styled.div`
  width: 400px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.PointC};
  border-radius: 10px 0 0 10px;

  img {
    height: 50px;
    margin: 5px;
    border-radius: 10px;
  }
`

export default ShareComponent
