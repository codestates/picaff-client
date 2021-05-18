import styled from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30vw;
  height: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.mobile - 50}px;
  min-width: ${({ theme }) => theme.deviceSizes.mobile - 75}px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  & form {
    width: 100%;
  }
  & .message {
    margin-bottom: 1rem;
    padding: 1rem 1rem;
    color: ${({ theme }) => theme.color.PointC};
  }

  & .button {
    width: 90%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem auto;
    margin-top: 1rem;
  }
`
