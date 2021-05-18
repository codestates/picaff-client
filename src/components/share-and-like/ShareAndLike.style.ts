import styled from 'styled-components'

export const BtnComponent = styled.div`
  display: flex;
  flex-direction: column;

  width: 75px;
  height: 150px;
  background-color: ${({ theme }) => theme.color.NavC};
  border-radius: 50px;

  & > button {
    flex: 1 1 0;

    width: 100%;
    height: 50px;
    font-size: 35px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.color.PointC};
    }
  }

  & > .share {
    margin-top: 15px;
    color: #696b6a;
  }

  & > .like {
    margin-bottom: 15px;
    color: #ed3232;
  }
`

export default BtnComponent
