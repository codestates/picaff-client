import styled from 'styled-components'

export const LandingComponent = styled.section`
  position: relative;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(#f2f1e5, 80%, #ddc3a6);
  padding-bottom: 18px;

  & .mainContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 9999;

    line-height: 111px;
    & .subdec {
      position: absolute;
      top: 15vh;
      left: auto;
      width: 75%;
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      font: normal normal 17px/26px 'plantin', 'sans-serif';
      & .style {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        flex: 0 0 100%;
        display: flex;
        align-items: center;
        & span {
          font: normal normal 12px/24px 'halyard-display', 'sans-serif';
          letter-spacing: 2.93px;
          text-transform: uppercase;
          font-weight: 600;
          color: ${({ theme }) => theme.color.YelloC};
        }
      }

      & .bar {
        border: none;
        background: #dad5cf;
        margin-left: 1.5rem !important;
        margin-right: 1.5rem !important;
        min-width: 30px;
        height: 1px;
        display: inline-block;
        vertical-align: middle;
        overflow: visible;
      }
    }

    & .dec {
      -webkit-text-stroke-width: 1.5px;
      -webkit-text-stroke-color: ${({ theme }) => theme.color.BackC};
      color: transparent;
      & .title {
        margin-top: 10px;
        font-size: 5rem;
      }
      @media (max-width: 992px) {
        & .title {
          margin-top: 50px;
          font-size: 3rem;
          line-height: 0.6rem;
        }
      }
      & > :hover {
        color: ${({ theme }) => theme.color.YelloC};
        -webkit-text-stroke-color: ${({ theme }) => theme.color.YelloC};
      }
    }
    & .Container {
      display: flex;
      flex-wrap: wrap;
      width: 92%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: 15vw;
      width: 100%;
      vertical-align: baseline;

      margin-bottom: 3rem !important;
      font: normal 500 50px/55px 'NanumSquare', 'sans-serif';
      @media (min-width: 576px) {
        max-width: 500px;
      }
      @media (min-width: 768px) {
        max-width: 620px;
        font-size: 3rem;
      }
      @media (min-width: 992px) {
        max-width: 830px;
      }
      @media (min-width: 1200px) {
        max-width: 1024px;
        padding: 0 5% 0 15%;
      }
      @media (min-width: 1400px) {
        max-width: 1140px;
        padding-right: 15px;
        padding-left: 15px;
      }
    }

    & .p {
      margin-bottom: 0.2rem !important;
      p {
        font: normal normal 17px/26px 'NanumSquare';
        color: ${({ theme }) => theme.color.BackC};
        font-weight: 400;
        margin-top: 1rem;
        flex: 0 0 85%;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        text-align: left;
        flex-wrap: wrap;
        word-break: keep-all;
      }
      @media (max-width: 992px) {
        p {
          margin-top: 0.3rem;
          font-size: 1rem;
        }
      }
    }
    & .button {
      .btn {
        letter-spacing: 0;
        border: none;
        color: #f3f1ef;
        position: relative;
        display: inline-block;
        background-color: transparent;
        font: normal normal 1rem/1rem 'sans-serif', 'sans-serif';
        letter-spacing: 2.93px;
        text-transform: uppercase;
        font-weight: 600;
        pointer-events: initial;
        transition: all 350ms ease-in-out;
      }

      .btn:hover,
      .btn:active {
        letter-spacing: 5px;
        color: ${({ theme }) => theme.color.YelloC};
        cursor: pointer;
      }

      .btn:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 2px;
        width: 100%;
        transition: all 800ms ease-in-out;
        transform: translateZ(0) scaleX(0.5);
        transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        perspective: 1000;
        transform-origin: left;
        background: #f3f1ef;
        border: 1px solid rgba(#fff, 0);
        animation: lineout 0.4s forwards;
      }
      .btn:hover:after {
        animation: linein 0.4s forwards;
        backface-visibility: hidden;
        border-color: #fff;
        transition: width 350ms ease-in-out;
        width: 100%;
      }
    }
  }

  & .VideoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  video {
    display: block;
    object-fit: cover;
    z-index: 998;
    position: relative;
    margin: auto;
    width: 92%;
    height: 92%;
    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
    }
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
    opacity: 0.7;
    animation-delay: 0s;
    bottom: -5px;
    filter: brightness(48%) sepia(1) contrast(1.8);
    animation: wave 5s linear infinite;
  }

  & .wave.wave2 {
    z-index: 999;
    opacity: 0.4;
    animation-delay: -5s;
    bottom: 10px;
    filter: brightness(43%) sepia(1) contrast(3);
    animation: wave-reverse 3.5s ease-in infinite, wave-Y 8s infinite;
  }

  & .wave.wave3 {
    z-index: 998;
    opacity: 0.7;
    animation-delay: -2s;
    bottom: -15px;
    filter: brightness(38%) sepia(1) contrast(3);
    animation: wave 2s linear infinite;
  }

  & .wave.wave4 {
    z-index: 997;
    opacity: 0.7;
    animation-delay: 2s;
    bottom: -20px;
    filter: brightness(38%) sepia(1) contrast(3);
    animation: wave-reverse 4.2s ease-in infinite, wave-Y 8s infinite;
  }

  @keyframes wave-Y {
    0% {
      bottom: -20px;
    }
    25% {
      bottom: -10px;
    }
    50% {
      bottom: -30px;
    }
    75% {
      bottom: -10px;
    }
    100% {
      bottom: -20px;
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
  @keyframes linein {
    0% {
      transform-origin: left;
      transform: translateZ(0) scaleX(0.5);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
    50% {
      transform-origin: left;
      transform: translateZ(0) scaleX(1);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
    50.1% {
      transform-origin: right;
      transform: translateZ(0) scaleX(1);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
    100% {
      transform-origin: right;
      transform: translateZ(0) scaleX(0.5);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
  }

  @keyframes lineout {
    0% {
      transform-origin: right;
      transform: translateZ(0) scaleX(0.5);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
    50% {
      transform-origin: right;
      transform: translateZ(0) scaleX(1);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
    50.1% {
      transform-origin: left;
      transform: translateZ(0) scaleX(1);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
    100% {
      transform-origin: left;
      transform: translateZ(0) scaleX(0.5);
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
    }
  }
`

export default LandingComponent
