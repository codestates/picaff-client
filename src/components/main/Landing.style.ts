import styled from 'styled-components'

export const LandingComponent = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(#f2f1e5, 85%, #ffe6bd);

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
    bottom: 14rem;
    z-index: 9999;
    position: relative;
    margin: auto;
    width: 65vw;
    @media ${({ theme }) => theme.device.tablet} {
      width: 80vw;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 90vw;
    }
    max-width: 750px;
  }

  & .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: url('./images/wave.png');
    background-size: 1000px 100px;
  }

  & .wave.wave1 {
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
    filter: brightness(33%) sepia(1) contrast(2.5);
    animation: wave 5s linear infinite;
  }

  & .wave.wave2 {
    z-index: 999;
    opacity: 0.4;
    animation-delay: -5s;
    bottom: 10px;
    filter: brightness(38%) sepia(1) contrast(3);
    animation: wave-reverse 3.5s ease-in infinite, wave-Y 8s infinite;
  }

  & .wave.wave3 {
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
    filter: brightness(38%) sepia(1) contrast(3);
    animation: wave 2s linear infinite;
  }

  & .wave.wave4 {
    z-index: 997;
    opacity: 0.7;
    animation-delay: 2s;
    bottom: 20px;
    filter: brightness(38%) sepia(1) contrast(3);
    animation: wave-reverse 4.2s ease-in infinite, wave-Y 8s infinite;
  }

  @keyframes wave-Y {
    0% {
      bottom: -4px;
    }
    25% {
      bottom: 30px;
    }
    50% {
      bottom: 3px;
    }
    75% {
      bottom: 15px;
    }
    100% {
      bottom: -4px;
    }
  }

  @keyframes wave {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  @keyframes wave-reverse {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }
`

export default LandingComponent
