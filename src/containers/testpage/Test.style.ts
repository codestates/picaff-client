import styled from 'styled-components'

type Index = {
  index: number
}

export const SliderContainer = styled.div<Index>`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;

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
