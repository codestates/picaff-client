import styled from 'styled-components'

export const CoffeeResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  height: 200vh;

  .section_result {
    display: flex;
    flex: 1 1 0;
    margin: 10px;
    height: 100vh;
    border: 2px solid lightgrey;

    .radarChart,
    .description {
      display: flex;
      flex: 1 1 0;
      justify-content: center;
      align-items: center;
      border: 2px solid orange;
      width: 100%;
      height: 100%;
    }
  }
  & .closebtn {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 0px;
    margin-right: 5%;
    & .close {
      font-size: 60px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & > div {
      width: 100%;
      margin: 5px;
      border: 2px solid lightblue;
    }

    .box_map {
      flex: 3 1 0;
      width: 100%;
    }

    .box_tag {
      flex: 1 1 0;
      width: 100%;
    }

    .box_text {
      flex: 1 1 0;
      width: 100%;
    }
  }

  .section_map {
    display: flex;
    flex: 1 1 0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 2px solid lightgrey;

    & .ItemModal {
      height: 100vh;
      position: absolute;
      transform: translateY(100vh);
      transition: transform 2s;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`

export default CoffeeResultContainer
