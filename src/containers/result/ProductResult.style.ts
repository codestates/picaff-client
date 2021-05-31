import styled from 'styled-components'

export const ProductResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .section_result {
    display: flex;
    flex: 1 1 0;
    border: 2px solid lightgrey;
    width: 100%;
    height: 100%;

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

  .description {
    display: flex;
    flex-direction: column;

    & > div {
      width: 100%;
      margin: 5px 0;
      border: 2px solid lightblue;
    }

    .box_image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 3 1 0;
      height: 100%;

      img {
        width: 100%;
        border-radius: 5px;
      }
    }

    .box_tag {
      flex: 1 1 0;
    }

    .box_text {
      flex: 1 1 0;
    }
  }

  .section_image {
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    border: 2px solid lightgrey;
    width: 100%;

    img {
      -webkit-filter: grayscale(100%);
      -webkit-transition: 0.3s ease-in-out;
      -moz-filter: grayscale(100%);
      -moz-transition: 0.3s ease-in-out;
      -o-filter: grayscale(100%);
      -o-transition: 0.3s ease-in-out;
      border-radius: 5px;
      width: 100%;
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

  @media ${({ theme }) => theme.device.tablet} {
    .section_image {
      display: flex;
      flex-direction: column;
    }
  }
`

export default ProductResultContainer
