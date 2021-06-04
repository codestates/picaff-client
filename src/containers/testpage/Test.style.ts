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
    height: 4px;
    transition: width 1s;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
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
      min-height: 400px;
      width: 100%;
    }
    .slide:first-child {
      top: -6vh;
    }

    & .btnContainer {
      width: 160px;
      height: 40px;
      margin: 1rem auto;
    }
  }
`
