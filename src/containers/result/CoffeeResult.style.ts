import styled from 'styled-components'

export const CoffeeResultContainer = styled.div`
  display: flex;
  flex-direction: column;

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

  .description {
    display: flex;
    flex-direction: column;

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
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 2px solid lightgrey;
  }
`

export default CoffeeResultContainer
