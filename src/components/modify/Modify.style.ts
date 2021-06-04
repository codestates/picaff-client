import styled from 'styled-components'

export const ModifyContainer = styled.div`
  margin-left: 20vw;
  margin-top: 5rem;
  font-size: 1.3rem;
  * {
    margin-top: 1rem;
  }
  span {
    margin-left: 0.3rem;
  }
  .alertspan {
    font-size: 1.3rem;
    margin-left: 0.3rem;
  }
  h2 {
    color: ${({ theme }) => theme.color.PointC};
    margin: 2rem;
  }
  .buttonContainer {
    margin-top: 5rem;
    & > div {
      margin-top: 2rem;
      padding: 2px;
      label {
        color: ${({ theme }) => theme.color.PointC};
        text-decoration: underline;
        text-decoration-color: ${({ theme }) => theme.color.PointC};
      }
      label:hover {
        color: ${({ theme }) => theme.color.YelloC};
        text-decoration: underline;
        text-decoration-color: ${({ theme }) => theme.color.YelloC};
      }
    }
  }
  .normalButton {
    display: none;
    }
  }
  .modifyButton {
    margin-left: 2vw;
    font-size: 1.3rem;
    // margin-left: 1%;
    width: 110px;
    height: 35px;
    background-color: ${({ theme }) => theme.color.PointC};
    color: ${({ theme }) => theme.color.WhiteC};
    border: transparent;
    border-radius: 10px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.color.PointC};
      border: 3px solid ${({ theme }) => theme.color.PointC};
    }
  }
  .modifyInput {
    font-size: 1.3rem;
    height: 35px;
  }
`
