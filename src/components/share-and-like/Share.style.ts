import styled from 'styled-components'

export const ShareComponent = styled.div`
  display: flex;
  align-items: center;
  position: fixed;

  top: 20rem;
  right: -36rem;
  width: 20%;
  min-width: 330px;
  height: 11%;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: ${({ theme }) => theme.color.PointC};

  .box_btn {
    display: flex;
    flex-direction: row;

    img {
      flex: 1 1 0;
      min-width: 50px;
      min-height: 50px;
      width: 10%;
      border-radius: 10px;
      margin: 10px;
    }
  }

  @keyframes slide {
    100% {
      right: 0px;
    }
  }

  @keyframes outslide {
    0% {
      right: 0px;
    }
    100% {
      right: -36rem;
    }
  }
`

export default ShareComponent
