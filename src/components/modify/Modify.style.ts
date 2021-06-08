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
  .inputContainer {
    width: 60%;
  }
  h2 {
    color: ${({ theme }) => theme.color.PointC};
    margin: 2rem;
  }
  .modifyContainer {
    position: relative;
    display: flex;
    flex-direction: row;

    align-items: center;
    h2 {
      width: fit-content;
    }
    .modify {
      margin-top: 0px;
      margin-left: 15vw;
    }
  }

  .SignOffContainer {
    width: fit-content;
  }

  .buttonContainer {
    margin-top: 4rem;
    & > div {
      margin-top: 3rem;
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
`
