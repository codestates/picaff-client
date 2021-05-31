import styled from 'styled-components'

export const CoffeeResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.color.PointC};

  .section_result {
    display: flex;
    margin: 10px;
    height: 90vh;
    border: 2px solid lightgrey;
    justify-items: center;
    align-items: center;

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
    position: relative;
    height: 100vh;

    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 2px solid lightgrey;
  }
`

export default CoffeeResultContainer
