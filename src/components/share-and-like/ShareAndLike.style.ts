import styled from 'styled-components'

type BtnComponentProps = {
  isLiked: boolean
}

export const BtnComponent = styled.div<BtnComponentProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45%;
  right: 5%;

  width: 75px;
  height: 150px;
  background-color: ${({ theme }) => theme.color.NavC};
  border-radius: 50px;

  & > button {
    flex: 1 1 0;

    width: 100%;
    height: 50px;
    font-size: 35px;
    z-index: 999;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  & > .share {
    margin-top: 15px;
    color: ${({ theme }) => theme.color.PointC};
  }

  & > .like {
    margin-bottom: 15px;
    color: ${({ isLiked, theme }) => (isLiked ? '#ed3232' : theme.color.PointC)};
  }
`

export default BtnComponent
