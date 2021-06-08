import styled from 'styled-components'

type Index = {
  index: number
}

export const SliderContainer = styled.div<Index>`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  & .progress {
    position: relative;
    top: -3rem;
    background-color: ${({ theme }) => theme.color.PointC};
    width: ${({ index }) => ((index + 1) / 11) * 100}%;
    height: 3px;
    transition: width 1s;
  }
  & > .slider {
    white-space: nowrap;
    transition: ease 1000ms;
    transform: translate3d(${(props) => -props.index * 100}%, 0, 0);

    & > .slide {
      display: inline-block;
      min-height: 400px;
      width: 100%;
    }

    & .btnContainer {
      width: 160px;
      height: 40px;
      margin: 1rem auto;
    }
  }
`
