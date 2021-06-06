import styled from 'styled-components'

type IsTabActiveType = {
  isTabActive: boolean
}

export const ResultContainer = styled.div<IsTabActiveType>`
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
  width: 100%;
  height: cal(100vh - 80px);
  margin: 0;

  .top_container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .section_btn {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    position: absolute;
    left: 10vh;
    bottom: 5vh;
  }

  .section_btn > button {
    width: 100%;
    height: 100%;
    font-size: 3.3rem;
    font-weight: 600;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .section_btn > button.coffee {
    color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.PointC : theme.color.GreyC)};
    border-bottom: 7px solid
      ${({ isTabActive, theme }) => (isTabActive ? theme.color.PointC : 'none')};
    margin-left: -5px;
  }

  .section_btn > button.product {
    color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.GreyC : theme.color.PointC)};
    border-bottom: 7px solid
      ${({ isTabActive, theme }) => (isTabActive ? 'none' : theme.color.PointC)};
    margin-left: 30px;
  }

  .btn_share {
    position: absolute;
    top: 115px;
    right: 50px;
    font-size: 2.7rem;
    color: ${({ theme }) => theme.color.PointC};
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
    }

    .section_btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 80%;
      height: 10%;
      position: relative;
      left: 0;
      top: 0;
      margin: 0 auto;
      margin-top: 3rem;
      border: none;
      justify-content: space-evenly;

      & > button {
        width: 25vw;
        font-size: 1.7rem;
        padding-bottom: 2vh;
      }
    }

    .section_btn > button.coffee {
      color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.PointC : theme.color.GreyC)};
      border-bottom: 7px solid
        ${({ isTabActive, theme }) => (isTabActive ? theme.color.PointC : theme.color.GreyC)};
    }

    .section_btn > button.product {
      color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.GreyC : theme.color.PointC)};
      border-bottom: 7px solid
        ${({ isTabActive, theme }) => (isTabActive ? theme.color.GreyC : theme.color.PointC)};
      margin: 0;
    }

    .section_result {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .section_share {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.color.PointC};
      cursor: pointer;
      z-index: -1;
    }

    .section_share > button {
      position: absolute;
      top: 210px;
      right: 4%;
    }
  }

  @media (max-width: 768px) {
    .section_btn {
      width: 95%;
      justify-content: space-evenly;
      & > button {
        width: 40vw;
        font-size: 1.2rem;
        padding-bottom: 2vh;
      }
    }
  }
`

export default ResultContainer
