import styled from 'styled-components'

type IsTabActiveType = {
  isTabActive: boolean
}

export const ResultContainer = styled.div<IsTabActiveType>`
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
  }

  .section_btn > button {
    width: 200px;
    height: 50px;
    font-size: 1rem;
    font-weight: 600;
    border-top: 3px solid ${({ theme }) => theme.color.PointC};
    border-right: 3px solid ${({ theme }) => theme.color.PointC};
    border-left: 3px solid ${({ theme }) => theme.color.PointC};
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    outline: none;
    cursor: pointer;
  }

  .section_btn > button.coffee {
    background-color: ${({ isTabActive, theme }) =>
      isTabActive ? theme.color.PointC : 'transparent'};
    color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.WhiteC : theme.color.PointC)};
  }

  .section_btn > button.product {
    background-color: ${({ isTabActive, theme }) =>
      isTabActive ? 'transparent' : theme.color.PointC};
    color: ${({ isTabActive, theme }) => (isTabActive ? theme.color.PointC : theme.color.WhiteC)};
  }

  .share {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.PointC};
  }
`

export default ResultContainer
