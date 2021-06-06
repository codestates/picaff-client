import styled from 'styled-components'

export const MypageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  max-width: ${({ theme }) => theme.device.modile - 10}px;
  width: 100%;

  & .UserModify {
    margin: 0 auto;
    width: fit-content;
  }
  & > * {
    margin-bottom: 1rem;
  }
  & h1 {
    color: ${({ theme }) => theme.color.PointC};
  }
  & h3 {
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
  & div {
    margin: 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    max-width: ${({ theme }) => theme.device.modile - 60}px;
  }
  & .Container {
    margin: 0 1rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
  }
`
