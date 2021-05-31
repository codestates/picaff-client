import styled from 'styled-components'

export const TestResultListContainer = styled.section`
  max-width: ${({ theme }) => theme.device.modile - 10}px;
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  & .itemContainer {
    overflow: hidden;
    padding: 0;
    margin: 0.5rem;
    display: flex;
    height: 230px;
    width: 40vw;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -0.5rem 0 1rem #000;
    /*   margin-left: -50px; */
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
    @media ${({ theme }) => theme.device.tablet} {
      width: 30vw;
    }
    & > div {
      width: 50%;
      height: 320px;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .itemContainer:not(:first-child) {
    margin-left: -50px;
  }

  .itemContainer:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }

  .itemContainer:hover ~ .itemContainer {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }
`
