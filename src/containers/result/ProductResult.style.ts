import styled from 'styled-components'

export const ProductResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10vh;

  .section_result {
    display: flex;
    flex-direction: row;
    height: 81vh;
    width: 100%;

    .box_image {
      flex: 1 1 1;
      height: 60%;
      margin-left: 5%;
      min-width: 418px;

      & > img {
        height: 90%;
        width: 100%;
        object-fit: contain;
      }
    }

    .parent_desc {
      flex: 1.4 1 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      margin-top: auto;
      margin-bottom: 35vh;
      margin-left: 2vw;

      .box_desc {
        display: flex;
        flex-direction: column;
        position: relative;

        .name {
          flex: 1 1 0;
          padding-left: 16px;
          font-weight: 600;
          font-size: 3.5rem;
        }

        .text {
          flex: 1 1 0;
          padding-left: 16px;
          margin-top: 30px;
          font-size: 1.1rem;
          font-family: 'NanumSquare';
        }

        .tag {
          flex: 1 1 0;
          margin-top: 10px;
          margin-left: 9px;
        }
      }
    }

    .box_radar {
      flex: 1.4 1 2;
      margin-left: -70px;
      margin-right: 30px;
      height: 70vh;
      width: 100%;
      margin-top: 200px;

      .radarChart {
        height: 100%;
        width: 40vw;
      }
    }
  }

  .section_image {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .title {
      flex: 0.5 1 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 7vh;
      margin-left: 18vw;
      font-size: 2rem;
    }

    .image_box {
      margin-top: 5vh;
      column-count: 2;
      column-gap: 2rem;
      align-items: center;

      .itemContainer {
        height: 40vh;
        display: flex;
        flex-direction: row;
        max-width: 600px;
        min-width: 280px;
      }

      .image {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: 10%;
        margin-bottom: 2rem;
        width: 100%;
        min-width: 280px;
      }
      & .singleName {
        position: relative;
        display: block;
        align-items: center;
        font-size: 1.5rem;
        margin-left: 3vw;
        margin-top: 15vh;
      }

      img {
        filter: grayscale(100%);
        transition: 0.3s ease-in-out;
        border-radius: 5px;
        width: 100%;
      }

      img:hover {
        filter: grayscale(0%);
        transition: 0.3s ease-in-out;
      }
      & .active > img {
        filter: grayscale(0%);
        transition: 0.3s ease-in-out;
      }
    }
  }

  & .ItemModal {
    height: 100vh;
    position: absolute;
    transform: translateY(100vh);
    transition: transform 2s;
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .section_result {
      display: flex;
      flex-direction: column;
      height: 100%;

      .box_image {
        height: 30%;
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center;

        & > img {
          height: 100%;
        }
      }

      .parent_desc {
        justify-content: center;
        flex-direction: row;
        align-items: center;
        margin: 0;
        margin-top: 2vh;
        margin-left: 2vw;

        .box_desc {
          display: flex;
          flex-direction: column;
          position: relative;

          .name {
            height: 70%;
            margin: 0;
          }
        }
      }

      .box_radar {
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        position: relative;
        margin: 0;

        .radarChart {
          width: 100%;
        }
      }
    }

    .section_image {
      display: inline-block;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;

      .title {
        height: 10%;
        margin: 0;
      }

      .image_box {
        column-count: 1;
        .itemContainer {
          display: flex;
          flex-direction: column;
          justify-content: start;
          margin-bottom: 5%;

          .image {
            width: 80%;
            height: 80%;
            & img {
              width: 100%;
              height: 100%;
            }
          }
          & .singleName {
            position: relative;
            display: block;
            align-items: center;
            font-size: 1.5rem;
            margin-left: 3vw;
            margin-top: 0rem;
            margin-bottom: 0.5rem;
          }
        }
      }

      .image_box:nth-child(3) {
        padding: 0;
      }
    }
  }
`

export default ProductResultContainer
