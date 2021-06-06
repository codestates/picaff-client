import styled from 'styled-components'

type EndedTestContainer = {
  onLoading: boolean
}

export const EndedTestContainer = styled.div<EndedTestContainer>`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 25vh;
  height: 100%;
  overflow: hidden;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.WhiteC};
  }

  #testLoading {
    margin-top: 15px;
    display-flex: center;
    justify-content: center;
    width: 25%;
    margin-bottom: 75px;
  }

  .loadingStart {
    display: ${({ onLoading }) => (onLoading ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    height: 100%;

    .video {
      display: block;
      object-fit: cover;
      z-index: 2;
      margin: 0 auto;
      width: 55%;
      height: 55%;
      padding-top: 12px;
    }
  }

  .loadingEnd {
    display: ${({ onLoading }) => (!onLoading ? 'flex' : 'none')};

    & button {
      margin-top: 5vh;
      width: 200px;
      height: 80px;
    }
  }

  & > .background {
    position: absolute;
    z-index: 0;
    width: 40%;
    height: 40%;
    border-radius: 50%;
    top: 20%;
    background-color: ${({ theme }) => theme.color.PointC};
  }

  @media (max-width: 992px) {
    top: 20vh;

    & #testLoading {
      width: 55%;
      margin-bottom: 70px;
    }

    & .video {
      width: 50%;
    }

    .loadingEnd {
      & button {
        margin-top: 3vh;
        width: 170px;
        height: 70px;
      }
    }
  }
`
