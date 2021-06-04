import styled from 'styled-components'

export const ProductResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 10vh;

  .section_result {
    display: flex;
    flex-direction: row;
    height: 100vh;

    .box_image {
      position: relative;
      display: block;
      width: 100%;
      max-width: 40vw;
      height: fit-content;
      margin-top: 5rem;
      margin-left: 90px;
      border-radius: 30px;
      overflow: hidden;

      & img {
        padding: 5px;
        border: 2px solid #0b421a;
        width: 100%;
        height: 100%;
      }
    }

    .parent_desc {
      flex: 1 1 0;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      margin-top: auto;
      margin-bottom: 27vh;
      margin-left: 2vw;

      .box_desc {
        display: flex;
        flex-direction: column;
        position: relative;
        bottom: 7rem;

        .name {
          flex: 1 1 0;
          padding-left: 16px;
          font-weight: 600;
          font-size: 2.3rem;
        }

        .text {
          flex: 1 1 0;
          padding-left: 16px;
          margin-top: 30px;
          font-size: 1.1rem;
          p {
            font-family: 'NanumSquare';
          }
        }

        .tag {
          flex: 1 1 0;
          margin-top: 10px;
          margin-left: 9px;
        }
      }
    }

    .box_radar {
      flex: 1.2 1 0;
      width: 30%;

      .radarChart {
        margin-top: 40px;
        margin-right: 30px;
      }
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

  .section_image {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 2rem;
    }

    .image_box {
      margin-top: 5vh;
      column-gap: 2rem;
      align-items: center;
      column-count: 2;

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
        padding-left: 10%;
        padding-bottom: 2rem;
        width: 100%;
        min-width: 280px;
      }
      & .singleName {
        position: relative;
        display: block;
        align-items: center;
        font-size: 1.5rem;
        padding-left: 5vw;
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

  @media (max-width: 1400px) {
    .image_box {
      column-count: 2;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    display: flex;
    flex-direction: column;

    .section_result {
      display: flex;
      flex-direction: column;
      height: 100%;

      .box_image {
        margin: 0 auto;
        position: relative;
        display: block;
        width: 100%;
        max-width: 95%;
        height: fit-content;
        padding: 1rem 1rem;
        border-radius: 30px;
        overflow: hidden;
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
          bottom: 0px;

          .name {
            height: 70%;
            margin: 0;
          }
          .text {
            padding-right: 16px;
          }
        }
      }

      .box_radar {
        width: 100%;
        height: 30%;
        min-height: 40vh;

        display: flex;
        justify-content: center;

        .radarChart {
          width: 100%;
          margin: 0;
        }
      }
    }

    .section_image {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;
      justify-items: center;
      align-items: center;

      .title {
        margin: 0 10%;
      }

      .image_box {
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

  @media (max-width: 768px) {
    .image_box {
      column-count: 1 !important;
    }
  }
`

export default ProductResultContainer
