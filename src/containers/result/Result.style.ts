import styled from 'styled-components'

type IsTabActiveType = {
  isTabActive: boolean
}

export const ResultContainer = styled.div<IsTabActiveType>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.BackC};
  height: 200vh;

  .top_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
  }

  .section_btn {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }

  .section_btn > button {
    width: 300px;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    border: 3px solid ${({ theme }) => theme.color.PointC};
    border-radius: 10px;
    outline: none;
    cursor: pointer;
  }

  .section_btn > button.coffee {
    background-color: ${({ isTabActive, theme }) =>
      isTabActive ? theme.color.PointC : 'transparent'};
    color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.WhiteC : theme.color.PointC)};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .section_btn > button.product {
    background-color: ${({ isTabActive, theme }) =>
      isTabActive ? 'transparent' : theme.color.PointC};
    color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.PointC : theme.color.WhiteC)};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn_share {
    position: absolute;
    top: 115px;
    right: 50px;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.color.PointC};
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: 100%;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
    }

    .section_btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px;
      padding: 20px;
      width: 100%;
    }

    .section_btn > button.coffee {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .section_btn > button.product {
      width: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .section_result {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .radarChart {
    }

    .section_share {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.color.PointC};
      border: none;
      cursor: pointer;
      outline: none;
    }

    .section_share > button {
      position: static;
    }
  }
`

export default ResultContainer
