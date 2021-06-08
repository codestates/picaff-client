import styled from 'styled-components'

export const SignUpContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.mobile - 50}px;
  min-width: ${({ theme }) => theme.deviceSizes.mobile - 75}px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;

  h2 {
    margin-bottom: 1.7rem;
    text-align: center;
    color: ${({ theme }) => theme.color.BrownC};
  }

  .greeting {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.PointC};
    font-size: 1rem;
  }

  .box_signup {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    #signup {
      padding-bottom: 2px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid ${({ theme }) => theme.color.StrongBrownC};
      background-color: transparent;
      color: ${({ theme }) => theme.color.StrongBrownC};
      font-size: 1rem;
      font-weight: 600;
      outline: none;
      cursor: pointer;

      &:hover {
        color: #696b6a;
        border-bottom: 2px solid #696b6a;
      }
    }
  }

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
    margin-bottom: 2rem;
  }
`
