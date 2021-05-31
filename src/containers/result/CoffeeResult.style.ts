import styled from 'styled-components'

export const CoffeeResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 3px solid ${({ theme }) => theme.color.PointC};

  .section_result {
    display: flex;
    flex: 1 1 0;
    margin: 10px;
    border: 2px solid lightgrey;

    .radarChart,
    .description {
      display: flex;
      flex: 1 1 0;
      justify-content: center;
      align-items: center;
      margin: 10px;
      border: 2px solid orange;
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
      width: 95%;
      margin: 5px;
      border: 2px solid lightblue;
    }

    .box_map {
      flex: 3 1 0;
    }

    .box_tag {
      flex: 1 1 0;
    }

    .box_text {
      flex: 1.5 1 0;
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
  }
  & .ItemModal {
    height: 100vh;
    position: absolute;
    transform: translateY(100vh);
    transition: transform 2s;
  }
`

export default CoffeeResultContainer
