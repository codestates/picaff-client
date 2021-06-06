import styled from 'styled-components'

export const TestLoadingComponent = styled.div`
  width: 100%;
  border-radius: 5px;

  .loading-bar-holder {
    width: 100%;
    height: 45px;
    border: 2px solid ${({ theme }) => theme.color.WhiteC};
    background: ${({ theme }) => theme.color.WhiteC};
    border-radius: 5px;

    .loading-bar {
      position: relative;
      width: 5%;
      height: 100%;
      background: ${({ theme }) => theme.color.YelloC};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      animation: load 3s infinite;

      .loading-bar-shine {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        background: #ffffff;
        opacity: 0.3;
        animation: shine 1.5s infinite;
      }
    }
  }

  @keyframes load {
    0% {
      width: 5%;
    }
    100% {
      width: 100%;
      background: ${({ theme }) => theme.color.PointC};
    }
  }

  @keyframes shine {
    0% {
      width: 5%;
    }
    100% {
      width: 100%;
    }
  }
`

export default TestLoadingComponent
