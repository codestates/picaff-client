import styled from 'styled-components'

export const ShareComponent = styled.div`
  position: fixed;
  top: 20rem;
  right: 0rem;
  width: 20%;
  min-width: 260px;
  height: 8%;

  .active {
    transform: translateX(0rem);
  }

  .close {
    transform: translateX(24rem);
  }

  .box_btn {
    position: relative;
    display: flex;
    flex-direction: row;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: ${({ theme }) => theme.color.PointC};
    padding-left: 3px;
    transition: transform 1s;

    img {
      flex: 1 1 0;
      min-width: 45px;
      min-height: 45px;
      width: 10%;
      border-radius: 10px;
      margin: 10px 5px;
    }
  }
`

export default ShareComponent
