import styled from 'styled-components'

export const ProductResultContainer = styled.div`
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

    .box_image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 3 1 0;
      height: 100%;

      img {
        width: 400px;
        border-radius: 5px;
      }
    }

    .box_tag {
      flex: 1 1 0;
    }

    .box_text {
      flex: 1.5 1 0;
    }
  }

  .section_image {
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 2px solid lightgrey;

    img {
      -webkit-filter: grayscale(100%);
      -webkit-transition: 0.3s ease-in-out;
      -moz-filter: grayscale(100%);
      -moz-transition: 0.3s ease-in-out;
      -o-filter: grayscale(100%);
      -o-transition: 0.3s ease-in-out;
      border-radius: 5px;
    }

    img:hover {
      -webkit-filter: grayscale(0%);
      -webkit-transition: 0.3s ease-in-out;
      -moz-filter: grayscale(0%);
      -moz-transition: 0.3s ease-in-out;
      -o-filter: grayscale(0%);
      -o-transition: 0.3s ease-in-out;
    }
  }
`

export default ProductResultContainer
