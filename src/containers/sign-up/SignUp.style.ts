import styled from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30vw;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
