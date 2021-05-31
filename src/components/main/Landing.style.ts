import styled from 'styled-components'

export const LandingComponent = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.BackC};

  & .mainContainer {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & h1 {
      font-weight: 900;
      color: ${({ theme }) => theme.color.PointC};
      margin-bottom: 5rem;
      font-size: 2rem;
    }
    p {
      margin-bottom: 1.7rem;
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 3rem;
    }
  }

  & .buttonContainer {
    width: 190px;
    height: 2rem;
    margin-bottom: 3rem;
    z-index: 102;
  }

  & .VideoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    & .backContainer {
      position: absolute;
      overflow: hidden;
      z-index: 100;
      width: 550px;
      height: 550px;
      bottom: 30px;
      & .imageBack {
        box-shadow: 0px 0px 40px 40px ${({ theme }) => theme.color.YelloC}60;
        position: absolute;
        background-color: ${({ theme }) => theme.color.YelloC};
        width: 350px;
        height: 350px;
        z-index: 101;
        left: 90px;
        bottom: -40px;
        border-radius: 50%;
      }
    }
  }
  video {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default LandingComponent
