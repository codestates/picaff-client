import styled from 'styled-components'

export const CoffeeResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10vh;

  .section_result {
    display: flex;
    flex-direction: row;
    height: 81vh;

    .box_map {
      flex: 1 1 0;
      height: 60%;
      margin-top: -10px;
      margin-left: 90px;
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
          font-family: 'NanumSquareRoundR';
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

  .section_map {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 10px;

    & .ItemModal {
      height: 100vh;
      position: absolute;
      transform: translateY(100vh);
      transition: transform 2s;
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

      .box_map {
        width: 100%;
        margin: 0;
        height: 30%;
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
  }
`

export default CoffeeResultContainer
