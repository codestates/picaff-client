import styled from 'styled-components'

export const LoginContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.mobile - 50}px;
  min-width: ${({ theme }) => theme.deviceSizes.mobile - 75}px;

  h2 {
    margin-top: 1.7rem;
    margin-bottom: 1.7rem;
    text-align: center;
    color: ${({ theme }) => theme.color.BrownC};
  }

  .alert {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.color.PointC};
    font-size: 0.9rem;
  }

  .box_login {
    display: flex;
    flex-direction: column;
    margin: 1.2rem 0;

    .user_login {
      display: flex;
      justify-content: center;
      margin-bottom: 0.5rem;
      height: 3.5rem;
    }
  }

  .greeting {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.PointC};
    font-size: 1.2rem;
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
`

export default LoginContainer
