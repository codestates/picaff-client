import styled from 'styled-components'

export const ShareComponent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;

  top: 13rem;
  right: -36rem;
  width: 20%;
  height: 11%;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: ${({ theme }) => theme.color.PointC};

  animation: slide 1s forwards;

  .close {
    animation: outslide 1s forwards;
    display: none;
  }

  @keyframes slide {
    100% {
      right: 0;
    }
  }

  @keyframes outslide {
    0% {
      right: 100;
    }
    100% {
      right: -36rem;
    }
  }

  .box_btn {
    display: flex;
    flex-direction: row;

    img {
      flex: 1 1 0;
      width: 10%;
      border-radius: 10px;
      margin: 10px;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    align-items: center;
    top: 20%;
    left: -36rem;
    width: 60%;
    height: 10%;

    border-top-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;

    animation: slide 1s forwards;

    @keyframes slide {
      100% {
        left: 0;
      }
    }

    .box_btn {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      align-items: center;

      & > img {
        flex: 1 1 0;
        border-radius: 20%;
        margin: 10px;
      }
    }
  }
`

export default ShareComponent
