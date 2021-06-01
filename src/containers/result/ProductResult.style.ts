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

    .box_image {
      flex: 1 1 0;
      height: 60%;
      margin-left: 90px;

      & > img {
        height: 90%;
      }
    }

    .parent_desc {
      flex: 1.4 1 0;
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
        }

        .tag {
          flex: 1 1 0;
          margin-top: 10px;
          margin-left: 9px;
        }
      }
    }

    .box_radar {
      flex: 1.4 1 0;
      width: 100%;
      margin-left: -70px;
      margin-right: 10px;

      .radarChart {
        margin-top: 200px;
        height: 100%;
        width: 100%;
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

    .title {
      flex: 0.5 1 0;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 7vh;
      margin-left: 18vw;
      font-size: 2rem;
    }

    .image_box {
      flex: 2 1 0;
      display: flex;
      flex-direction: row;

      .image {
        display: flex;
        align-items: center;
        margin-left: 10vh;

        img {
          -webkit-filter: grayscale(100%);
          -webkit-transition: 0.3s ease-in-out;
          -moz-filter: grayscale(100%);
          -moz-transition: 0.3s ease-in-out;
          -o-filter: grayscale(100%);
          -o-transition: 0.3s ease-in-out;
          border-radius: 5px;
          width: 50%;
        }

        img:hover {
          -webkit-filter: grayscale(0%);
          -webkit-transition: 0.3s ease-in-out;
          -moz-filter: grayscale(0%);
          -moz-transition: 0.3s ease-in-out;
          -o-filter: grayscale(0%);
          -o-transition: 0.3s ease-in-out;
        }

        .singleName {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          margin-left: 3vh;
          margin-top: 15vh;
        }
      }

      #first,
      #third {
        padding-left: 25vh;
      }

      #second,
      #fourth {
        padding-right: 15vh;
      }
    }

    .image_box:nth-child(3) {
      padding-bottom: 8vh;
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
        height: 30%;
        display: flex;
        justify-content: center;

        .radarChart {
          width: 100%;
          margin: 0;
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
        height: 30%;
        margin: 0;
      }

      .image_box {
        display: flex;
        flex-direction: column;
        margin: 0;

        #first,
        #second,
        #third,
        #fourth {
          justify-content: center;
          margin: 0;
          padding: 0;
        }
      }

      .image_box:nth-child(3) {
        padding: 0;
      }
    }
  }
`

export default ProductResultContainer
