import styled from 'styled-components'

type Index = {
  index: number
}

export const SliderContainer = styled.div<Index>`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: calc(100vh - 80px);
  & .progress {
    position: relative;
    background-color: ${({ theme }) => theme.color.PointC};
    width: ${({ index }) => ((index + 1) / 11) * 100}%;
    height: 3px;
    transition: width 1s;
  }
  & .slider {
    white-space: nowrap;
    transition: ease 1000ms;
    transform: translate3d(${(props) => -props.index * 100}%, 0, 0);
    left: 0px;
    top: 0px;

    & .slide {
      position: relative;
      margin: auto 0;
      top: 16vh;
      display: inline-block;
      height: 100%;
      width: 100%;
    }
    .slide:first-child {
      position: relative;
      top: -8rem;
    }

    & .btnContainer {
      width: 160px;
      height: 40px;
      margin: 1rem auto;
    }
  }

  @media (max-width: 998px) {
    & .slide {
      position: relative;
      margin: auto 0;
      top: 10vh;
      display: inline-block;
      height: 100%;
      width: 100%;
    }

    & .btnContainer {
      width: 160px;
      height: 40px;
      margin: 1rem auto;
    }
  }
`
